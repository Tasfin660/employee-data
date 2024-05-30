import Header from '../components/layout/Header';
import SecondaryHeading from '../components/typography/SecondaryHeading';
import List from '../components/layout/List';

export default function Index() {
  return (
    <>
      <Header />
      <List element={false} filterRating={4}>
        <SecondaryHeading
          span="High Achievers"
          h2="Top Employee of Each Category"
        />
      </List>
    </>
  );
}
