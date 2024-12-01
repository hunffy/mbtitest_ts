import React from 'react';
import { Link } from 'react-router-dom';

function MainPage(): React.ReactElement {
  return (
    <div>
      메인페이지입니다.
      <Link to={'/question'}>질문페이지로</Link>
      <Link to={'/result'}>결과페이지로</Link>
    </div>
  );
}

export default MainPage;
