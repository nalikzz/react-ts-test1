import './Home.scss';
import ButtonNavigate from '../button-navigate/button-navigate';
import UserForm from '../User/UserForm/UserForm';

const Home = () => (
  <div className='contain-home'>
    <h1 className='mt-4'>Home Component</h1>
    <div className='contain-nav'>
      <ButtonNavigate name='Home' />
      <ButtonNavigate  name='About us'/>
    </div>
    <UserForm />
  </div>
);

export default Home;
