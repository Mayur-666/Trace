import NotFound from '@/components/NotFound';
import useFindAlgorithm from '@/hooks/useFindAlgorithm';
import ControlPane from '@/modules/ControlPane/ControlPane';

function AnimationPage() {
  const algorithm = useFindAlgorithm();
  if (!algorithm) {
    return <NotFound />;
  }

  return (
    <div className="t w-full h-full">
      <div className="flex h-[85dvh]">
        <div className="t w-[25%] p-4">
          <div className="t h-full">
            {algorithm.description},{algorithm.id},{algorithm.name},
            {algorithm.route},
          </div>
        </div>
        <div className="t w-[75%] p-4">
          <div className="t h-full"> Sidebar </div>
        </div>
      </div>

      <ControlPane />
    </div>
  );
}

export default AnimationPage;
