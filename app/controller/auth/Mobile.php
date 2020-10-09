<?php

namespace app\controller\auth;


use Aliyun\api_demo\SmsDemo;
use app\model\SysConfig as SysConfigModel;
use app\model\User as UserModel;
use bases\BaseController;

class Mobile extends BaseController
{
    /**
     * 手机登录获取验证码
     * return mixed
     */
    public function getLoginCode()
    {
        if (app('system')->getValue('merge_mode') == 3) {
            $post = input('post.');
            $this->validate($post, ['mobile' => 'require|length:11']);
            $mobile_user = UserModel::where('mobile', $post['mobile'])->find();
            //验证码目前是放数据库；可以改为放缓存，手机号做key，获取后删除；
            if ($mobile_user) {
                $data['code'] = rand(10000, 999999);
                $data['code_time'] = time() + (60 * 5);
                $mobile_user->save($data);
            } else {
                $data['mobile'] = $post['mobile'];
                $data['code'] = rand(10000, 999999);
                $data['code_time'] = time() + (60 * 5);
                UserModel::create($data);
            }
            $yzm_tmp_id=SysConfigModel::where('key', 'yzm_tmp_id')->value('value');
            SmsDemo::sendSms($post['mobile'], $data['code'],$yzm_tmp_id);
            return app('json')->success();
        } else {
            return app('json')->fail('未开启手机登录');
        }
    }

    /**
     * 手机登录获取token
     * @return string
     */
    public function getMobileToken()
    {
        if (app('system')->getValue('merge_mode') == 3) {
            $post = input('post.');
            $this->validate($post, ['mobile' => 'require|length:11','code'=>'require']);
            //$res = UserModel::where(['mobile' =>$post['mobile'], 'code' => $post['code']])->whereTime('code_time', '>', time())->find();
            $res = UserModel::where(['mobile' =>$post['mobile'], 'code' => $post['code']])->find(); //用于测试
            if (!$res) {
                return app('json')->fail('验证码错误');
            }
            $cache['uid'] = $res['id'];
            $cache['scope'] = 9;  // 推荐用枚举
            $token = (new Token())->saveCache($cache);
            return app('json')->success($token);
        } else {
            return app('json')->fail('未开启手机登录');
        }
    }

}