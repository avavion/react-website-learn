const User = ({ user }) => {
  return (
    <li className='user'>
      <h1 className='user__username'>{user.username}</h1>
      <h3 className='user__name'>{user.name}</h3>
      <p className='user__phone'>{user.phone}</p>
      <a href={`http://${user.website}`} rel='noreferrer' target='_blank'>
        {user.website}
      </a>
    </li>
  );
};

export default User;
