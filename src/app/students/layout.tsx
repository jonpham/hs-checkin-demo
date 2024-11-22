import { PropsWithChildren } from 'react';

function StudentViewLayout({ children }: PropsWithChildren) {
  return (
    <main className="flex min-h-screen flex-col p-6">
      <div className="mt-4 flex grow flex-col gap-4 md:flex-row">
        <div className="flex flex-col justify-center gap-6 rounded-lg bg-gray-50 px-6 py-10 md:w-4/5 md:px-20">
          {children}
        </div>
        <div className="flex items-center justify-center p-6 md:w-1/5 md:px-28 md:py-12">
          {/* Add SideBarHere ? */}
        </div>
      </div>
    </main>
  );
}

export { StudentViewLayout as default };
