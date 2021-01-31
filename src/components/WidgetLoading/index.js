import React from 'react';
import Widget from '../Widget';

export default function WidgetLoading() {
  return (
    <Widget>
      <Widget.Header>Carregando...</Widget.Header>
      <Widget.Loading url="https://mir-s3-cdn-cf.behance.net/project_modules/disp/585d0331234507.564a1d239ac5e.gif" />
    </Widget>
  );
}
