import React, { useEffect } from "react";
import { Button, View } from "react-native";
import opentype from "opentype.js";
import download from "downloadjs";
import cookies from "../../fonts/Cookie-Regular.ttf";
import svgPathBbox from "svg-path-bbox";
import SignaturePad from "signature_pad";

const Canvas: React.FC<{ text: string }> = ({ text }) => {
    const canvas = React.useRef<HTMLCanvasElement>(null);
    const svgRef = React.useRef<SVGSVGElement>(null);
    let signaturePadRef: SignaturePad; 
    useEffect(() => {
        addSignaturePad();
    }, []);

    function addSignaturePad() {
        const signaturePad = new SignaturePad(canvas.current as HTMLCanvasElement, {
            minWidth: 5,
            maxWidth: 10,
        });

        signaturePadRef = signaturePad;
    }

    function saveDraw() {
      const data = signaturePadRef.toDataURL("image/svg+xml");
      download(data, "signature.svg", "image/svg+xml");
  }
    async function drawText() {
        const font = await opentype.load(cookies);
        const path = font.getPath(text, 0, 0, 72);
        const svg = document.createElementNS("http://www.w3.org/2000/svg", "svg");
        const pathBox = svgPathBbox(path.toPathData(2));
        svg.setAttribute("viewBox", pathBox.toString());
        svg.appendChild(path.toDOMElement(2));
        download(new XMLSerializer().serializeToString(svg), "signature.svg", " image/svg+xml");
    }

    return (
        <View>
            <canvas style={{ border: "solid 1px black" }} ref={canvas} width="400" height="200" />
            <svg ref={svgRef} width="400" height="200">
                <text />
            </svg>
            <Button title="Save" onPress={() => drawText()} />
            <Button title="Save draw" onPress={() => saveDraw()} />
        </View>
    );
};

export default Canvas;
