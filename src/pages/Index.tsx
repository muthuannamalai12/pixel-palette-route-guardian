
import PageTransition from "@/components/PageTransition";

const Index = () => {
  return (
    <PageTransition>
      <div className="container mx-auto py-12 px-4">
        <h1 className="text-4xl font-bold mb-6 text-primary">Welcome to Pixel Palette</h1>
        <p className="text-xl text-muted-foreground mb-8">
          Your digital canvas for creative possibilities
        </p>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Creative Design</h2>
            <p className="text-muted-foreground">
              We craft visually stunning designs that capture your brand's essence.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Web Development</h2>
            <p className="text-muted-foreground">
              Cutting-edge websites built with the latest technologies.
            </p>
          </div>
          <div className="bg-card p-6 rounded-lg shadow-md">
            <h2 className="text-2xl font-semibold mb-3">Digital Marketing</h2>
            <p className="text-muted-foreground">
              Strategies that connect your brand with the right audience.
            </p>
          </div>
        </div>
      </div>
    </PageTransition>
  );
};

export default Index;
