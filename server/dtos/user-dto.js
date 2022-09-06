class UserDto {
  email;
  id;
  isActivated;
  nickname;

  constructor(model) {
    this.email = model.email
    //mongo добавляет _ для id
    this.id = model._id
    this.isActivated = model.isActivated
    this.nickname = model.nickname
  }
}

export  default UserDto