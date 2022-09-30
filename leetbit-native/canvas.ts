import SignaturePad from "signature_pad";

const canv = document.createElement('canvas');
document.body.appendChild(canv);
const canvas = document.querySelector("canvas");
const signaturePad = new SignaturePad(canvas as HTMLCanvasElement);
signaturePad.toDataURL("image/svg+xml");