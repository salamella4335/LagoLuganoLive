import ModeSelector from './ModeSelector'
import Map from './Map'
import Menu from './Menu'
import { useFocus } from '../context/FocusContext';
import MenuContent from './MenuContent.jsx';
import NewHeader from './NewLanding/NewHeader.jsx';

function MainPage() {
    const { focus } = useFocus();
    return (
        <div className="mainPage">
            <NewHeader />
            { focus && <Menu><MenuContent /></Menu> }
            <ModeSelector />
            <Map />
        </div>
    )
}

export default MainPage