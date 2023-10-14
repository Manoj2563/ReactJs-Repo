import React from "react";
import "./Technologycard.css";

export function Technologycard() {
  return (
    <><div id="/Technologycard">
      <div className="p-5 info">
        <h1 className="text-center techh1">Learn 4.0 Technology</h1>
        <p className="text-center">
          Technology, the application of scientific knowledge to the practical
          aims of human life or, as it is sometimes phrased, to the change and
          manipulation of the human environment.
        </p>
        <div>
          <div className="d-flex row p-5 justify-content-center">
            <div className="d-flex row col-lg-5 data p-5 m-2 ">
              <h3>Data Scientist</h3>
              <p>
                Data scientists are a new breed of analytical data expert who
                have the technical skills to solve complex problems – and the
                curiosity to explore what problems need to be solved. They're
                part mathematician, part computer scientist and part
                trend-spotter.
              </p>
              <img className="image"
                src="https://365datascience.com/resources/blog/thumb@1024_j8elvoucxbo-data-scientist-in-india.webp"
                alt="loading"
              />
            </div>
            <div className="d-flex row col-lg-5 iot p-5 m-2">
              <h3>IOT Developer</h3>
              <p>
                The role of an IoT Developer/Engineer is a broad umbrella that
                brings to play multiple disciplines and skillsets. IoT
                Developers are professionals who can develop, manage, and
                monitor IoT devices and systems by combining three core
                components – data, technology, and research.
              </p>
              <img className="image" src="https://cdn.thenewstack.io/media/2019/06/2b79f370-developer.png"
                alt="loading"
              />
            </div>
          </div>
          <div className="d-flex row p-5 justify-content-center">
            <div className="d-flex row col-lg-5 p-5 m-2 vit ">
              <h3>VR Developer</h3>
              <p>
                Virtual reality and augmented reality developers are the
                creative minds behind extended reality programs. The duties
                within the first few years in a position in either field
                typically include the designing, testing and developing of
                virtual or augmented reality software.
              </p>
              <img className="image"
                src="https://miro.medium.com/v2/resize:fit:1015/1*Jqrvy8kk7x2_5HcA3TeG1Q.jpeg"
                alt="loading"
              />
            </div>
            <div className="dd-flex row col-lg-5 p-5 m-2 mit">
              <h3>Data Scientist</h3>
              <p>
                A machine learning (ML) developer is an expert on using data to
                training models. The models are then used to automate processes
                like image classification, speech recognition, and market
                forecasting.
              </p>
              <img className="image"
                src="https://www.bacancytechnology.com/main-boot-5/images/hire-ml/xbanner-2.jpg,qv-2.pagespeed.ic.WHzwFdAtPH.jpg"
                alt="loading"
              />
            </div>
          </div>
        </div>
      </div>
      </div>
    </>
  );
}
