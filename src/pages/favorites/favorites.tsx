import Logo from 'components/logo/logo.tsx';
import Header from 'components/header/header.tsx';
import Layout from 'components/layout/layout.tsx';
import {OfferFromList} from 'types/offer.ts';
import FavoritesList from 'components/favorites-list/favorites-list.tsx';

type FavoritesProps={
  offers: OfferFromList[];
}

function Favorites({offers}: FavoritesProps): JSX.Element {
  return (
    <Layout header={<Header/>}>
      <>
        <main className="page__main page__main--favorites">
          <div className="page__favorites-container container">
            <section className="favorites">
              <h1 className="favorites__title">Saved listing</h1>
              <FavoritesList offers={offers} />
            </section>
          </div>
        </main>
        <footer className="footer container">
          <Logo blockName="footer" active={false}/>
        </footer>
      </>
    </Layout>
  );
}

export default Favorites;
