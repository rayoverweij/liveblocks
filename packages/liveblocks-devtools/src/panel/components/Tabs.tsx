import cx from "classnames";
import {
  TabsProps as DefaultTabsProps,
  Root,
  List,
  Trigger,
  Content,
} from "@radix-ui/react-tabs";
import type { ReactNode } from "react";

interface Tab {
  value: string;
  title: string;
  content: ReactNode;
}

interface TabsProps extends DefaultTabsProps {
  tabs: Tab[];
}

export function Tabs({ tabs, className, ...props }: TabsProps) {
  return (
    <Root className={cx(className, "flex flex-col")} {...props}>
      <List className="flex h-7 flex-none overflow-x-auto border-b border-gray-200 bg-gray-100 px-2 text-gray-600 dark:border-gray-600 dark:bg-gray-800 dark:text-gray-400">
        {tabs.map((tab) => (
          <Trigger
            key={tab.value}
            value={tab.value}
            className={cx(
              "relative flex items-center px-3",
              "after:pointer-events-none after:absolute after:bottom-0 after:left-0 after:hidden after:h-0.5 after:w-full after:bg-orange-500 [&[data-state='active']]:after:block",
              "hover:bg-gray-200 hover:text-gray-800 focus-visible:bg-gray-200 focus-visible:text-gray-800 [&[data-state='active']]:text-gray-800",
              "dark:after:bg-orange-400 dark:hover:bg-gray-700 dark:hover:text-gray-200 dark:focus-visible:bg-gray-700 dark:focus-visible:text-gray-200 dark:[&[data-state='active']]:text-gray-200"
            )}
          >
            {tab.title}
          </Trigger>
        ))}
      </List>
      {tabs.map((tab) => (
        <Content
          key={tab.value}
          value={tab.value}
          className="flex-1 overflow-y-auto"
        >
          {tab.content}
        </Content>
      ))}
    </Root>
  );
}
