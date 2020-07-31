class ApplicationController < ActionController::Base
  protect_from_forgery with: :exception
  before_action :authenticate_user!
  before_action :configure_permitted_parameters, if: :devise_controller?

  protected
 #クラスの外からは呼び出せない。同じインスタンス内で呼び出せる。また、他のインスタンスでも同じクラスやサブクラスであれば呼び出せる。
  def configure_permitted_parameters #deviceで使用するパラメーターを許可しますと言うメソッド
    devise_parameter_sanitizer.permit(:sign_up, keys: [:name])
  end
end

# configure_permitted_parametersをここに書く理由は、各コントローラーに継承するため。
#devise4から書き方が上記のように変わった。