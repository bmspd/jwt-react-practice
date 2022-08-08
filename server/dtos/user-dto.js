class UserDto {
  email;
  id;
  isActivated;

  constructor(model) {
    this.email = model.email
    //mongo добавляет _ для id
    this.id = model._id
    this.isActivated = model.isActivated
  }
}

export  default UserDto