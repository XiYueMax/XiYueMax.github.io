document.addEventListener('DOMContentLoaded', function(){

document.querySelectorAll('.tab-btn').forEach(btn => {
    btn.addEventListener('click', (e) => {
        document.querySelectorAll('.tab-btn').forEach(b => b.classList.remove('active'));
        document.querySelectorAll('.panel').forEach(p => p.classList.remove('active'));
        e.target.classList.add('active');
        document.getElementById(e.target.getAttribute('data-target')).classList.add('active');
    });
});

const elRatio = document.getElementById('optRatio');
const elRatioLabel = document.getElementById('ratioLabel');
elRatio.addEventListener('input', () => {
    elRatioLabel.textContent = parseFloat(elRatio.value).toFixed(2);
});

const bs = document.getElementById('bannerSize');
const bsl = document.getElementById('bannerSizeLabel');
bs.addEventListener('input', () => {
    bsl.textContent = bs.value;
});

const mcPalette = [{
        code: '0',
        hex: '#000000',
        r: 0,
        g: 0,
        b: 0
    },
    {
        code: '1',
        hex: '#0000AA',
        r: 0,
        g: 0,
        b: 170
    },
    {
        code: '2',
        hex: '#00AA00',
        r: 0,
        g: 170,
        b: 0
    },
    {
        code: '3',
        hex: '#00AAAA',
        r: 0,
        g: 170,
        b: 170
    },
    {
        code: '4',
        hex: '#AA0000',
        r: 170,
        g: 0,
        b: 0
    },
    {
        code: '5',
        hex: '#AA00AA',
        r: 170,
        g: 0,
        b: 170
    },
    {
        code: '6',
        hex: '#FFAA00',
        r: 255,
        g: 170,
        b: 0
    },
    {
        code: '7',
        hex: '#AAAAAA',
        r: 170,
        g: 170,
        b: 170
    },
    {
        code: '8',
        hex: '#555555',
        r: 85,
        g: 85,
        b: 85
    },
    {
        code: '9',
        hex: '#5555FF',
        r: 85,
        g: 85,
        b: 255
    },
    {
        code: 'a',
        hex: '#55FF55',
        r: 85,
        g: 255,
        b: 85
    },
    {
        code: 'b',
        hex: '#55FFFF',
        r: 85,
        g: 255,
        b: 255
    },
    {
        code: 'c',
        hex: '#FF5555',
        r: 255,
        g: 85,
        b: 85
    },
    {
        code: 'd',
        hex: '#FF55FF',
        r: 255,
        g: 85,
        b: 255
    },
    {
        code: 'e',
        hex: '#FFFF55',
        r: 255,
        g: 255,
        b: 85
    },
    {
        code: 'f',
        hex: '#FFFFFF',
        r: 255,
        g: 255,
        b: 255
    }
];

const charsBlock = ['░', '▒', '▓', '█'];
const charsAscii = ['.', '-', '=', '+', '*', '#', '%', '@'];

function matchMcColor(r, g, b, a) {
    if (a < 50) return null;
    let minDiff = Infinity;
    let best = mcPalette[0];
    for (let mc of mcPalette) {
        let diff = (r - mc.r) * (r - mc.r) * 0.3 + (g - mc.g) * (g - mc.g) * 0.59 + (b - mc.b) * (b - mc.b) * 0.11;
        if (diff < minDiff) {
            minDiff = diff;
            best = mc;
        }
    }
    return best;
}

document.getElementById('btnGenerate').addEventListener('click', () => {
    const fileInput = document.getElementById('imgUpload');
    if (!fileInput.files || !fileInput.files[0]) return alert('请先选择图片');
    const outWidth = parseInt(document.getElementById('optWidth').value);
    const material = document.getElementById('optMaterial').value;
    const ratio = parseFloat(document.getElementById('optRatio').value);
    const img = new Image();
    img.onload = () => {
        const aspect = img.height / img.width;
        const outHeight = Math.max(1, Math.round(outWidth * aspect * ratio));
        const sampleCanvas = document.createElement('canvas');
        sampleCanvas.width = outWidth;
        sampleCanvas.height = outHeight;
        const sCtx = sampleCanvas.getContext('2d');
        sCtx.drawImage(img, 0, 0, outWidth, outHeight);
        const imgData = sCtx.getImageData(0, 0, outWidth, outHeight).data;
        let finalString = '';
        const renderCanvas = document.getElementById('renderCanvas');
        const rCtx = renderCanvas.getContext('2d');
        const fontSize = 16;
        const charWidth = fontSize * 0.6;
        const lineHeight = fontSize * 0.95;
        renderCanvas.width = outWidth * charWidth;
        renderCanvas.height = outHeight * lineHeight;
        rCtx.fillStyle = '#1e1e1e';
        rCtx.fillRect(0, 0, renderCanvas.width, renderCanvas.height);
        rCtx.font = `${fontSize}px 'Courier New', monospace`;
        rCtx.textBaseline = 'top';
        for (let y = 0; y < outHeight; y++) {
            let lastColorCode = '';
            for (let x = 0; x < outWidth; x++) {
                const idx = (y * outWidth + x) * 4;
                const r = imgData[idx];
                const g = imgData[idx + 1];
                const b = imgData[idx + 2];
                const a = imgData[idx + 3];
                const mcColor = matchMcColor(r, g, b, a);
                if (mcColor) {
                    let renderChar = material;
                    if (material.startsWith('smart_')) {
                        const lum = 0.299 * r + 0.587 * g + 0.114 * b;
                        const adjLum = lum * (a / 255);
                        if (material === 'smart_block') {
                            let cIdx = Math.floor((adjLum / 256) * charsBlock.length);
                            renderChar = charsBlock[Math.min(cIdx, charsBlock.length - 1)];
                        } else {
                            let cIdx = Math.floor((adjLum / 256) * charsAscii.length);
                            renderChar = charsAscii[Math.min(cIdx, charsAscii.length - 1)];
                        }
                    }
                    if (mcColor.code !== lastColorCode) {
                        finalString += '§' + mcColor.code;
                        lastColorCode = mcColor.code;
                    }
                    finalString += renderChar;
                    rCtx.fillStyle = mcColor.hex;
                    rCtx.fillText(renderChar, x * charWidth, y * lineHeight);
                } else {
                    finalString += ' ';
                    lastColorCode = '';
                }
            }
            finalString += '\n';
        }
        document.getElementById('resultPanel').style.display = 'block';
        document.getElementById('resultText').value = finalString.trim();
        document.getElementById('resultPanel').scrollIntoView({
            behavior: 'smooth'
        });
    };
    img.src = URL.createObjectURL(fileInput.files[0]);
});

let isWhiteBg = true;
document.getElementById('btnToggleTheme').addEventListener('click', (e) => {
    isWhiteBg = !isWhiteBg;
    e.target.innerText = isWhiteBg ? '当前：白底黑字 (点击切换)' : '当前：黑底白字 (点击切换)';
    e.target.style.background = isWhiteBg ? '#1D1D1F' : '#F5F5F7';
    e.target.style.color = isWhiteBg ? '#FFF' : '#1D1D1F';
    e.target.style.border = isWhiteBg ? 'none' : '1.5px solid #1D1D1F';
});

document.getElementById('btnGenBanner').addEventListener('click', () => {
    const text = document.getElementById('bannerInput').value;
    if (!text) return;
    const fontSize = parseInt(document.getElementById('bannerSize').value);
    const pad = 2;
    const tc = document.createElement('canvas');
    const tx = tc.getContext('2d');
    tx.font = `bold ${fontSize}px sans-serif`;
    const tw = Math.ceil(tx.measureText(text).width);
    tc.width = tw + pad * 2;
    tc.height = fontSize + pad * 2;
    tx.font = `bold ${fontSize}px sans-serif`;
    tx.textBaseline = 'top';
    tx.fillStyle = '#FFF';
    tx.fillRect(0, 0, tc.width, tc.height);
    tx.fillStyle = '#000';
    tx.fillText(text, pad, pad);
    const data = tx.getImageData(0, 0, tc.width, tc.height).data;
    let str = '';
    const rc = document.getElementById('bannerCanvas');
    const rx = rc.getContext('2d');
    const cw = 16;
    const ch = 16;
    rc.width = tc.width * cw;
    rc.height = tc.height * ch;
    for (let y = 0; y < tc.height; y++) {
        let last = '';
        for (let x = 0; x < tc.width; x++) {
            const isT = data[(y * tc.width + x) * 4] < 128;
            const cCode = isT ? (isWhiteBg ? '0' : 'f') : (isWhiteBg ? 'f' : '0');
            if (cCode !== last) {
                str += '§' + cCode;
                last = cCode;
            }
            str += '█';
            rx.fillStyle = cCode === '0' ? '#000' : '#FFF';
            rx.fillRect(x * cw, y * ch, cw, ch);
        }
        str += '\n';
    }
    document.getElementById('bannerResultPanel').style.display = 'block';
    document.getElementById('bannerResultText').value = str.trim();
    document.getElementById('bannerResultPanel').scrollIntoView({
        behavior: 'smooth'
    });
});

function copyText(inputId, btn) {
    const text = document.getElementById(inputId).value;
    const orgText = btn.innerText;
    const success = () => {
        btn.innerText = '复制成功';
        setTimeout(() => btn.innerText = orgText, 2500);
    };
    const fallback = () => {
        const ta = document.createElement("textarea");
        ta.value = text;
        ta.style.position = "fixed";
        ta.style.top = "-9999px";
        document.body.appendChild(ta);
        ta.select();
        try {
            document.execCommand('copy') ? success() : alert('失败');
        } catch (e) {
            alert('失败');
        }
        document.body.removeChild(ta);
    };
    if (navigator.clipboard && window.isSecureContext) {
        navigator.clipboard.writeText(text).then(success).catch(fallback);
    } else {
        fallback();
    }
}

document.getElementById('btnCopy').addEventListener('click', function() {
    copyText('resultText', this);
});
document.getElementById('btnCopyBanner').addEventListener('click', function() {
    copyText('bannerResultText', this);
});

});
