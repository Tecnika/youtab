import 'bootstrap/dist/css/bootstrap.min.css';
// import '../../css/bootstrap/custom.css';

import Header from './base/header';
import Footer from './base/footer';
import { Container } from 'react-bootstrap';

function Layout({ children }) {
  return (
    <main className='all'>
      <Header />
      <main className='grow1'>
        <Container>
          {children}
        </Container>
      </main>
      <Footer />
    </main>
  );
}

export default Layout;
