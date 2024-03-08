import "./PhotoReel.css";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { RViewer, RViewerTrigger } from "react-viewerjs";

function PhotoReel({ photos }) {
  return (
    <div className="photo-reel">
      <RViewer imageUrls={photos}>
        <div className="row">
          {photos.map((imagen, index) => {
            return (
              <RViewerTrigger key={index} index={index}>
                <div className="col-md-4 mb-2 d-flex justify-content-center align-items-center">
                  <img src={imagen} alt="EMPORIO" />
                </div>
              </RViewerTrigger>
            );
          })}
        </div>
      </RViewer>
    </div>
  );
}

export default PhotoReel;
