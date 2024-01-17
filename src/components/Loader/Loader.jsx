import { MagnifyingGlass } from 'react-loader-spinner';
import { LoaderCont, Overlay } from './Loader.styled';
// import { useSelector } from 'react-redux';
// import { selectorAppState } from '../../redux/appState/selectors';

const Loader = () => {
  // const { isLoading } = useSelector(selectorAppState);

  return (
    // isLoading && (
      <Overlay>
        <LoaderCont>
          <MagnifyingGlass />
        </LoaderCont>
      </Overlay>
    )
  // );
};

export default Loader;
