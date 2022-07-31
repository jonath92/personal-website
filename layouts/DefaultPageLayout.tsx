import styled from "styled-components";

const OuterContainer = styled.div`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

interface isLandingPage {
  isLandingPage: boolean;
}

const Content = styled.div`
  display: flex;
  width: 100%;
  flex-direction: column;
  align-items: center;
  flex: 1 0 auto;
  * {
    scroll-margin-top: 56px;
  }
`;

interface DefaultPageLayoutProps {
  children: React.ReactNode;
  isLandingPage?: boolean;
}

export const DefaultPageLayout = (props: DefaultPageLayoutProps) => {
  const { children, isLandingPage = false } = props;

  return (
    <OuterContainer>
      {/* <div>TODO Navbar</div> */}
      <Content {...{ isLandingPage }}>{children}</Content>
    </OuterContainer>
  );
};
