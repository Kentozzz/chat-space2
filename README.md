#DB設計

## groups_usersテーブル

|Column|Type|Options|
|------|----|-------|
|user  |reference|null: false, foreign_key: true|
|group |reference|null: false, foreign_key: true|

### Association
- belongs_to :group
- belongs_to :user

## usersテーブル

|Column|Type|Options|
|------|----|-------|
|name  |string|null: false, add_index: true|

### Association
- has_many :messages
- has_many :groups_users
- has_many :groups, through: :groups_users

## groupsテーブル

|Column|Type|Options|
|------|----|-------|
|name  |string|null: false|

### Association

- has_many :users
- has_many :groups_users
- has_many :users, through: :groups_users

## messagesテーブル

|Column|Type|Options|
|------|----|-------|
|text  |text|       |
|image |string|     |
|user  |reference|foreign_key: true|
|group |reference|foreign_key: true|

### Association
- belongs_to :user
- belongs_to :group