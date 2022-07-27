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
  /* padding-top is 56 px which is the height of the Navbar + 10 px as this looks like. 
    This value should ensure that the distance between content and footer and content and header are roughly the same when using h1 in the beginning of Content. This is roughly the case because of the line height of h1 - however hasn't been properly calculated. 
     */
  padding-top: ${(p: isLandingPage) => (p.isLandingPage ? "0" : "66px")};
  /* padding-bottom: 30px; */

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
      <div>TODO Navbar</div>
      <Content {...{ isLandingPage }}>{children}</Content>
    </OuterContainer>
  );
};
