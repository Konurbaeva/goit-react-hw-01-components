import styled from 'styled-components';

export const SectionUl = styled.ul`
  display: flex;
  padding: 20px;
  margin: 20px;
  // width: 20%;
  height: 50%;
`;

export const Stats = ({ stats }) => {
  const { followers, views, likes } = stats;
  return (
    <>
      {stats && (
        <SectionUl className="stats">
          <li>
            <span className="label">Followers</span>
            <p> {followers}</p>
          </li>
          <li>
            <span className="label">Views</span>
            <p>{views}</p>
          </li>
          <li>
            <span className="label">Likes</span>
            <p>{likes}</p>
          </li>
        </SectionUl>
      )}
    </>
  );
};
