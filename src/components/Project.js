import "./Project.css";
import React, { useState } from "react";
import SimpleImageSlider from "react-simple-image-slider";

function Project(props) {
  const [showSlider, setShowSlider] = useState(false);
  function onClickHandler() {
    setShowSlider((state) => !state);
  }
  return (
    <React.Fragment>
      {showSlider && props.images ? (
        <div className="team_member ">
          <button onClick={onClickHandler} className="sliderBtn">
            {showSlider ? (
              <img
                alt="icon"
                className="xIcon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM0MS43NTEgMzQxLjc1MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGxpbmsgdHlwZT0idGV4dC9jc3MiIGlkPSJibGFjay1tb2RlIiByZWw9InN0eWxlc2hlZXQiPjwvbGluaz48c3R5bGUgdHlwZT0idGV4dC9jc3MiIGlkPSJibGFjay1tb2RlLWN1c3RvbS1zdHlsZSI+PC9zdHlsZT4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCQoJCQk8cmVjdCB4PSItNDkuNDE1IiB5PSIxNDkuNTQyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzIgLTAuNzA3IDAuNzA3IDAuNzA3MiAtNzAuNzg2OCAxNzAuODMyNikiIHdpZHRoPSI0NDAuNTI4IiBoZWlnaHQ9IjQyLjY2NyIgZmlsbD0iIzMwYjhiMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQkKCQkJPHJlY3QgeD0iMTQ5LjU2OSIgeT0iLTQ5LjM4OCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcgLTAuNzA3MiAwLjcwNzIgMC43MDcgLTcwLjc3MTIgMTcwLjkxOSkiIHdpZHRoPSI0Mi42NjciIGhlaWdodD0iNDQwLjUyOCIgZmlsbD0iIzMwYjhiMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
              />
            ) : (
              <img
                alt="icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU1MC44MDEgNTUwLjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iYmxhY2stbW9kZSIgcmVsPSJzdHlsZXNoZWV0Ij48L2xpbms+PHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0iYmxhY2stbW9kZS1jdXN0b20tc3R5bGUiPjwvc3R5bGU+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNTE1LjgyOCw2MS4yMDFIMzQuOTcyQzE1LjY1OSw2MS4yMDEsMCw3Ni44NTksMCw5Ni4xNzJ2MzU4LjQ1OEMwLDQ3My45NDIsMTUuNjU5LDQ4OS42LDM0Ljk3Miw0ODkuNmg0ODAuODU2ICAgYzE5LjMxNCwwLDM0Ljk3My0xNS42NTgsMzQuOTczLTM0Ljk3MVY5Ni4xNzJDNTUwLjgwMSw3Ni44NTksNTM1LjE0Myw2MS4yMDEsNTE1LjgyOCw2MS4yMDF6IE01MTUuODI4LDk2LjE3MlYzNTAuNTFsLTY4LjkyLTYyLjY2ICAgYy0xMC4zNTktOS40MTYtMjYuMjg5LTkuMDQtMzYuMTg2LDAuODY2bC02OS43NTIsNjkuNzQxTDIwMy40MzgsMTk0LjE3OWMtMTAuMzk2LTEyLjQxNS0yOS40MzgtMTIuNTM3LTM5Ljk5LTAuMjcxTDM0Ljk3MiwzNDMuMjE5ICAgVjk2LjE3Mkg1MTUuODI4eiBNMzY3LjIwMSwxODcuOTcyYzAtMjYuNTYxLDIxLjUyMy00OC4wODYsNDguMDg0LTQ4LjA4NmMyNi41NjIsMCw0OC4wODYsMjEuNTI1LDQ4LjA4Niw0OC4wODYgICBjMCwyNi41NjEtMjEuNTIzLDQ4LjA4NS00OC4wODYsNDguMDg1QzM4OC43MjUsMjM2LjA1OCwzNjcuMjAxLDIxNC41MzMsMzY3LjIwMSwxODcuOTcyeiIgZmlsbD0iIzMwYjhiMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
              />
            )}
          </button>
          <SimpleImageSlider
            width={"260px"}
            height={"300px"}
            style={{
              margin: "auto",

              boxShadow: `0px 1px 10px 1px #30B8B2`,
            }}
            images={props.images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      ) : (
        <div className="team_member ">
          {props.images && (
            <button onClick={onClickHandler} className="sliderBtn">
              {showSlider ? (
                <img
                  alt="icon"
                  className="xIcon"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDM0MS43NTEgMzQxLjc1MSIgc3R5bGU9ImVuYWJsZS1iYWNrZ3JvdW5kOm5ldyAwIDAgNTEyIDUxMiIgeG1sOnNwYWNlPSJwcmVzZXJ2ZSIgY2xhc3M9IiI+PGc+PGxpbmsgdHlwZT0idGV4dC9jc3MiIGlkPSJibGFjay1tb2RlIiByZWw9InN0eWxlc2hlZXQiPjwvbGluaz48c3R5bGUgdHlwZT0idGV4dC9jc3MiIGlkPSJibGFjay1tb2RlLWN1c3RvbS1zdHlsZSI+PC9zdHlsZT4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KCTxnPgoJCQoJCQk8cmVjdCB4PSItNDkuNDE1IiB5PSIxNDkuNTQyIiB0cmFuc2Zvcm09Im1hdHJpeCgwLjcwNzIgLTAuNzA3IDAuNzA3IDAuNzA3MiAtNzAuNzg2OCAxNzAuODMyNikiIHdpZHRoPSI0NDAuNTI4IiBoZWlnaHQ9IjQyLjY2NyIgZmlsbD0iIzMwYjhiMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8Zz4KCQkKCQkJPHJlY3QgeD0iMTQ5LjU2OSIgeT0iLTQ5LjM4OCIgdHJhbnNmb3JtPSJtYXRyaXgoMC43MDcgLTAuNzA3MiAwLjcwNzIgMC43MDcgLTcwLjc3MTIgMTcwLjkxOSkiIHdpZHRoPSI0Mi42NjciIGhlaWdodD0iNDQwLjUyOCIgZmlsbD0iIzMwYjhiMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiI+PC9yZWN0PgoJPC9nPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                />
              ) : (
                <img
                  alt="icon"
                  src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDU1MC44MDEgNTUwLjgiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iYmxhY2stbW9kZSIgcmVsPSJzdHlsZXNoZWV0Ij48L2xpbms+PHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0iYmxhY2stbW9kZS1jdXN0b20tc3R5bGUiPjwvc3R5bGU+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+Cgk8cGF0aCBkPSJNNTE1LjgyOCw2MS4yMDFIMzQuOTcyQzE1LjY1OSw2MS4yMDEsMCw3Ni44NTksMCw5Ni4xNzJ2MzU4LjQ1OEMwLDQ3My45NDIsMTUuNjU5LDQ4OS42LDM0Ljk3Miw0ODkuNmg0ODAuODU2ICAgYzE5LjMxNCwwLDM0Ljk3My0xNS42NTgsMzQuOTczLTM0Ljk3MVY5Ni4xNzJDNTUwLjgwMSw3Ni44NTksNTM1LjE0Myw2MS4yMDEsNTE1LjgyOCw2MS4yMDF6IE01MTUuODI4LDk2LjE3MlYzNTAuNTFsLTY4LjkyLTYyLjY2ICAgYy0xMC4zNTktOS40MTYtMjYuMjg5LTkuMDQtMzYuMTg2LDAuODY2bC02OS43NTIsNjkuNzQxTDIwMy40MzgsMTk0LjE3OWMtMTAuMzk2LTEyLjQxNS0yOS40MzgtMTIuNTM3LTM5Ljk5LTAuMjcxTDM0Ljk3MiwzNDMuMjE5ICAgVjk2LjE3Mkg1MTUuODI4eiBNMzY3LjIwMSwxODcuOTcyYzAtMjYuNTYxLDIxLjUyMy00OC4wODYsNDguMDg0LTQ4LjA4NmMyNi41NjIsMCw0OC4wODYsMjEuNTI1LDQ4LjA4Niw0OC4wODYgICBjMCwyNi41NjEtMjEuNTIzLDQ4LjA4NS00OC4wODYsNDguMDg1QzM4OC43MjUsMjM2LjA1OCwzNjcuMjAxLDIxNC41MzMsMzY3LjIwMSwxODcuOTcyeiIgZmlsbD0iIzMwYjhiMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjxnIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+CjwvZz4KPGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KPC9nPgo8ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgo8L2c+CjwvZz48L3N2Zz4="
                />
              )}
            </button>
          )}

          {props.url && (
            <a
              className="websiteBtn"
              href={props.url}
              target="_blank"
              rel="noreferrer"
            >
              <img
                alt="icon"
                src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZlcnNpb249IjEuMSIgeG1sbnM6eGxpbms9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkveGxpbmsiIHhtbG5zOnN2Z2pzPSJodHRwOi8vc3ZnanMuY29tL3N2Z2pzIiB3aWR0aD0iNTEyIiBoZWlnaHQ9IjUxMiIgeD0iMCIgeT0iMCIgdmlld0JveD0iMCAwIDUxMiA1MTIiIHN0eWxlPSJlbmFibGUtYmFja2dyb3VuZDpuZXcgMCAwIDUxMiA1MTIiIHhtbDpzcGFjZT0icHJlc2VydmUiIGNsYXNzPSIiPjxnPjxsaW5rIHR5cGU9InRleHQvY3NzIiBpZD0iYmxhY2stbW9kZSIgcmVsPSJzdHlsZXNoZWV0Ij48L2xpbms+PHN0eWxlIHR5cGU9InRleHQvY3NzIiBpZD0iYmxhY2stbW9kZS1jdXN0b20tc3R5bGUiPjwvc3R5bGU+PGcgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48Zz48cGF0aCBkPSJtMzUyLjc1MyAyMDEuNzU2Yy0xMy4xMjYtMTMuMTI2LTM4LjYyNC0zMS4yMDctNzUuNTE5LTMwLjU0N2wtNTEuNzYgNTEuNzZjLTUuOTM5IDUuOTM5LTUuOTQgMTUuMjczIDAgMjEuMjEzczE1LjI3NCA1LjkzOSAyMS4yMTMgMGMxNy42MDctMTcuNjA3IDQ2LjAzMi0xNy42MDcgNjMuNjQgMCAxNy42MDcgMTcuNjA3IDE3LjYwNyA0Ni4wMzIgMCA2My42NGwtMTMxLjE1NCAxMzEuMDQ2Yy0xNy42MDYgMTcuNjA2LTQ2LjAzMiAxNy42MDctNjMuNjQgMC0xNy42MDctMTcuNjA3LTE3LjYwNi00Ni4wMzQgMC02My42NGwzNi4zMzEtMzYuMjIzYy00LjAzMS0zLjE4MS03LjYzOC02LjM2NC0xMS4yNDQtOS45Ny0xMS4wMzEtMTEuMDMxLTE5Ljk0LTIzLjc2LTI2LjMwNC0zNy4zMzVsLTQxLjIxIDQxLjEwMmMtNDAuOTQxIDQwLjk0MS00MC45NDEgMTA3LjU1MSAwIDE0OC40OTJzMTA3LjU1MSA0MC45NDEgMTQ4LjQ5MiAwbDEzMS4xNTQtMTMxLjA0NmMyNC44MjktMjQuODI3IDU0LjEwNi05NC4zODcuMDAxLTE0OC40OTJ6IiBmaWxsPSIjMzBiOGIyIiBkYXRhLW9yaWdpbmFsPSIjMDAwMDAwIiBzdHlsZT0iIiBjbGFzcz0iIj48L3BhdGg+PC9nPjxnPjxwYXRoIGQ9Im0zNzMuOTY2IDE4MC41NDNjMTEuMjQ0IDExLjI0NCAxOS45NDIgMjMuNzU5IDI2LjMwNCAzNy4zMzVsMzguNjIzLTM4LjY4YzQwLjk0MS00MC45NDEgNDAuOTQxLTEwNy41NTEgMC0xNDguNDkycy0xMDcuNTUxLTQwLjk0MS0xNDguNDkyIDBsLTEyOC41NjcgMTI4LjYyNGMtMzkuNzQ0IDM5Ljc0NC00Mi4wMTMgMTA2LjQ4IDAgMTQ4LjQ5MiAyMS4xMSAyMS4xMSA1MC41NzcgMzEuNDA1IDc1LjUxOSAzMC41NDdsNTEuNzYtNTEuNzZjNS45NC01Ljk0IDUuOTQtMTUuMjczIDAtMjEuMjEzcy0xNS4yNzMtNS45NC0yMS4yMTMgMGMtMTcuNjA2IDE3LjYwNi00Ni4wMzIgMTcuNjA3LTYzLjY0IDBzLTE3LjYwNi00Ni4wMzQgMC02My42NGwxMjguNTY3LTEyOC42MjRjMTcuNjA3LTE3LjYwNyA0Ni4wMzItMTcuNjA3IDYzLjY0IDAgMTcuNjA3IDE3LjYwNyAxNy42MDcgNDYuMDMyIDAgNjMuNjRsLTMzLjc0MyAzMy44YzMuODE3IDIuOTcgNy42MzYgNi4zNjUgMTEuMjQyIDkuOTcxeiIgZmlsbD0iIzMwYjhiMiIgZGF0YS1vcmlnaW5hbD0iIzAwMDAwMCIgc3R5bGU9IiIgY2xhc3M9IiI+PC9wYXRoPjwvZz48L2c+PC9nPjwvc3ZnPg=="
              />
            </a>
          )}
          <div className="team_img">
            <img src={props.img} alt="Project img" />
          </div>
          <h3 style={props.images || props.url ? { marginTop: "-5px" } : {}}>
            {props.title}
          </h3>

          <p className="role">
            <ul>
              <li>
                <a
                  href={props.github}
                  title="Link Effect"
                  target="_blank"
                  rel="noreferrer"
                >
                  Github
                </a>
              </li>
            </ul>
          </p>
          <div class="allTechUsed ">
            {props.tech.map((skill, i) => (
              <span class="techUsed" id={i}>
                {skill}
                {""}
              </span>
            ))}
          </div>
          <p>{props.info}</p>
        </div>
      )}
    </React.Fragment>
  );
}
export default Project;
