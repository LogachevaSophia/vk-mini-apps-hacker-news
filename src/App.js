import logo from './logo.svg';
import './App.css';
import { useActiveVkuiLocation, useGetPanelForView,useRouteNavigator,RouteNavigator,useParams } from '@vkontakte/vk-mini-apps-router';
import { Root, View, Panel } from '@vkontakte/vkui';
import PostList from './pages/postList/postList.tsx';
import PostItem from './pages/postItem/postItem.tsx';


function App() {
  const { view: activeView } = useActiveVkuiLocation();
  const activePanel = useGetPanelForView('default_view');

  return (
    <Root activeView={activeView}>
      <View nav="default_view" activePanel={activePanel}> 
        <Panel nav="home_panel">
          {/* <h2>
            Home_panel
          </h2> */}
          <PostList></PostList>
        </Panel>
        <Panel nav="persik_panel">
           <PostItem></PostItem>
        </Panel>
      </View>

    </Root>
  );
}

export default App;
