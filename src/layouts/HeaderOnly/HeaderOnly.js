import Header from '../components/Header/Header';

function HeaderOnly({ children }) {
  return (
    <div>
      <Header></Header>
      <div class="container">
        <div class="content">{children}</div>
      </div>
    </div>
  );
}

export default HeaderOnly;
