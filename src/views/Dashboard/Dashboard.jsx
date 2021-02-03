import Page from 'components/Page';

const Dashboard = () => (
  <Page>
    <Page.Header title="Dashboard" />
    <Page.Subtitle title="Essa é a página da Dashboard" />

    <Page.Tabs title="Tabs da Dashboard">
      <Page.Tab key="key1" tab="Tab 1">
        Conteudo da Tab 1
      </Page.Tab>
      <Page.Tab key="key2" tab="Tab 2">
        Conteudo da Tab 2
      </Page.Tab>
    </Page.Tabs>
  </Page>
);

export default Dashboard;
