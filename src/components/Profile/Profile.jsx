import PropTypes from 'prop-types';
import { ProfileItem } from './ProfileItem/ProfileItem';
import { Stats } from './Stats/Stats';
import { Card } from '../ui/card';

export const Profile = ({ user, stats }) => {
  return (
    <>
      <div>
        <Card>
          <ProfileItem user={user} />
          <Stats stats={stats} />
        </Card>
      </div>
    </>
  );
};

Profile.propTypes = {
  user: PropTypes.shape({
    avatar: PropTypes.string,
    username: PropTypes.string,
    tag: PropTypes.string,
    location: PropTypes.string,
  }),
  stats: PropTypes.shape({
    followers: PropTypes.number,
    views: PropTypes.number,
    likes: PropTypes.number,
  }),
};
