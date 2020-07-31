class Group < ApplicationRecord
  has_many :group_users
  has_many :users, through: :group_users
  has_many :messages
  validates :name, presence: true, uniqueness: true

  def show_last_message
    if (last_message = messages.last).present? #オブジェクトに値が入っているかどうかを判定し、trueならlast_messageに最後のmessageを代入
      if last_message.content? #contentカラムに値が入っているか
        last_message.content #last_messageのcontentカラムを出力
      else
        '画像が投稿されています' #画像だけの場合はオブジェクトに何も入らないのでelseに行く
      end
    else
      'まだメッセージはありません。'  #空の場合はコチラ
    end
  end

end