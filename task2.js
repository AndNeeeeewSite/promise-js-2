console.log('2.')
console.log('Callback Code')
const users = [
    { name: 'Mango', active: true },
    { name: 'Poly', active: false },
    { name: 'Ajax', active: true },
    { name: 'Lux', active: false },
  ];
    let toggleUserState = (allUsers, userName, callback) => {
    const updatedUsers = allUsers.map(user =>
      user.name === userName ? { ...user, active: !user.active } : user,
    );
  
    callback(updatedUsers);
  };

  const logger = updatedUsers => console.table(updatedUsers);
  toggleUserState(users, 'Mango', logger);
  toggleUserState(users, 'Lux', logger);

  console.log('No Callback Code')
  toggleUserState = (allUsers, userName) =>{
    return promise = new Promise((resolve) => {
        resolve(allUsers.map(user => user.name === userName ? { ...user, active: !user.active } : user))
    })
  }
  toggleUserState(users, 'Mango').then(logger);
  toggleUserState(users, 'Lux').then(logger);