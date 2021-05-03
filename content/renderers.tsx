import { DocumentRendererProps } from '@keystone-next/document-renderer';
import classNames from 'classnames';

export const renderers: DocumentRendererProps['renderers'] = {
  inline: {
    bold: ({ children }) => {
      return <strong className="font-bold">{children}</strong>;
    },
  },
  block: {
    heading: ({ children, level }) => {
      switch (level) {
        case 1:
          return <h1 className="text-4xl text-pink-500">{children}</h1>;
        case 2:
          return <h2 className="text-3xl">{children}</h2>;
        case 3:
          return <h3 className="text-2xl">{children}</h3>;
        case 4:
          return <h4 className="text-xl">{children}</h4>;
        case 5:
          return <h5 className="text-base">{children}</h5>;
        case 6:
          return <h6 className="text-sm">{children}</h6>;
      }
    },
    paragraph: ({ children, textAlign }) => {
      return (
        <p
          className={classNames({
            'text-center': textAlign === 'center',
            'text-right': textAlign === 'end',
          })}
        >
          {children}
        </p>
      );
    },
  },
};
