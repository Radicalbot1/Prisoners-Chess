import React, {useRef, useEffect} from 'react';

interface ChessBoardProps {
    width: number;
    height: number;
}

const ChessBoard = ({ width, height }: ChessBoardProps) => {
    const canvasRef = useRef<HTMLCanvasElement>(null);

    useEffect(() => {
        const context = canvasRef.current?.getContext('2d');
        const squareSpacing = width / 8;
        if (context) {
            for (let i = 0; i < 8; i++)
            {
                for (let j = 0; j < 8; j++)
                {
                    context.beginPath();
                    context.rect(i * squareSpacing, j * squareSpacing, squareSpacing, squareSpacing);
    
                    if ((i + j) % 2 === 0)
                    {
                        context.fillStyle = "#B58863";
                    }
                    else
                    {
                        context.fillStyle = "#F0D9B5";
                    }
    
                    context.fill();
                }
            }
        }
    },[]);

    return <canvas ref={canvasRef} height={height} width={width} />;
};

ChessBoard.defaultProps = {
    width: 500,
    height: 500
};

export default ChessBoard;