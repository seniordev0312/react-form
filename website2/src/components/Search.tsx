import * as React from 'react';
import { createPortal } from 'react-dom';
import Router from 'next/router';
import Link from 'next/link';
import Head from 'next/head';
import { DocSearchModal } from '@francoischalifour/docsearch-react';
import { siteConfig } from 'siteConfig';

export interface SearchProps {
  appId?: string;
  apiKey?: string;
  indexName?: string;
  searchParameters?: any;
}

function Hit({ hit, children }: any) {
  return (
    <Link href="/docs/[...slug]" as={hit.url}>
      <a>{children}</a>
    </Link>
  );
}

let DocSearch: any = DocSearchModal;

const options = {
  appId: siteConfig.algolia.appId,
  apiKey: siteConfig.algolia.apiKey,
  indexName: siteConfig.algolia.indexName,
};

export const Search: React.FC<SearchProps> = ({
  appId,
  searchParameters = {
    hitsPerPage: 5,
  },
} = options) => {
  const [isLoaded, setIsLoaded] = React.useState(true);
  const [isShowing, setIsShowing] = React.useState(false);
  const scrollY = React.useRef(0);

  const load = React.useCallback(
    function load() {
      return Promise.resolve();
    },
    [isLoaded, setIsLoaded]
  );

  const onOpen = React.useCallback(
    function onOpen() {
      load().then(() => {
        scrollY.current = window.scrollY;
        setIsShowing(true);
        document.body.classList.add('DocSearch--active');
      });
    },
    [load, setIsShowing]
  );

  const onClose = React.useCallback(
    function onClose() {
      setIsShowing(false);
      document.body.classList.remove('DocSearch--active');
      window.scrollTo(0, scrollY.current);
    },
    [setIsShowing]
  );

  React.useEffect(() => {
    function onKeyDown(event: any) {
      if (
        (event.key === 'Escape' && isShowing) ||
        (event.metaKey && event.key === 'k')
      ) {
        event.preventDefault();

        if (isShowing) {
          onClose();
        } else {
          onOpen();
        }
      }
    }

    window.addEventListener('keydown', onKeyDown);

    return () => {
      window.removeEventListener('keydown', onKeyDown);
    };
  }, [isShowing, onOpen, onClose]);

  return (
    <>
      <Head>
        <link
          rel="preconnect"
          href={`https://${appId}-dsn.algolia.net`}
          crossOrigin="true"
        />
      </Head>

      <div>
        <button
          type="button"
          className="group form-input hover:text-gray-600 hover:border-gray-300 transition duration-150 ease-in-out pointer flex items-center bg-gray-50 text-left w-full  text-gray-500 rounded-lg text-sm align-middle"
          onClick={onOpen}
        >
          <svg
            width="1em"
            height="1em"
            className="mr-3 align-middle text-gray-600 flex-shrink-0 group-hover:text-gray-700"
            style={{ marginBottom: 2 }}
            viewBox="0 0 20 20"
          >
            <path
              d="M14.386 14.386l4.0877 4.0877-4.0877-4.0877c-2.9418 2.9419-7.7115 2.9419-10.6533 0-2.9419-2.9418-2.9419-7.7115 0-10.6533 2.9418-2.9419 7.7115-2.9419 10.6533 0 2.9419 2.9418 2.9419 7.7115 0 10.6533z"
              stroke="currentColor"
              fill="none"
              strokeWidth="2"
              fillRule="evenodd"
              strokeLinecap="round"
              strokeLinejoin="round"
            ></path>
          </svg>
          Search docs
          <span className="ml-auto">
            <kbd
              className="border border-gray-300 mr-1 bg-gray-100 align-middle p-0 inline-flex justify-center items-center  text-xs text-center mr-0 rounded group-hover:border-gray-300 transition duration-150 ease-in-out "
              style={{ minWidth: '1.8em' }}
            >
              ⌘
            </kbd>
            <kbd
              className="border border-gray-300 bg-gray-100 align-middle p-0 inline-flex justify-center items-center  text-xs text-center ml-auto mr-0 rounded group-hover:border-gray-300 transition duration-150 ease-in-out "
              style={{ minWidth: '1.8em' }}
            >
              K
            </kbd>
          </span>
        </button>
      </div>

      {isLoaded &&
        isShowing &&
        createPortal(
          <DocSearch
            {...options}
            searchParameters={searchParameters}
            onClose={onClose}
            navigator={{
              navigate({ suggestionUrl }: any) {
                Router.push(suggestionUrl, suggestionUrl);
              },
            }}
            transformItems={(items: any[]) => {
              return items.map(item => {
                return {
                  ...item,
                  url: item.url.replace('#__next', ''),
                };
              });
            }}
            hitComponent={Hit}
          />,
          document.body
        )}
    </>
  );
};

Search.displayName = 'Search';
