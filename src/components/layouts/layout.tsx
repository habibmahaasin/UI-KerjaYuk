interface LayoutInterface {
  children: React.ReactNode;
}

export default function Layout({ children }: LayoutInterface) {
  return (
    <div className="w-screen h-screen flex justify-center items-center bg-gray-100">
      <div className="@sm bg-white w-full h-screen max-w-md shadow-xl scrollable-content">
        {children}
      </div>
    </div>
  );
}
