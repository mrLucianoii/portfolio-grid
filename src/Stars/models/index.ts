export interface BoundsProps {
    (): () => void,
    width: number,
    height: number,
}


export interface ProjectProps {
    position: {
        (): () => void,
        isInside: (value: any) => boolean,
        x: number,
        y: number,
    },
    bounds: BoundsProps,
}

export interface PaperProps {
    view: {
        onFrame: ([]) => void,
        draw: () => void,
        size: number,
        bounds: BoundsProps,
        getSize: () => BoundsProps,
        center: any,
        add: any,
        subtract: any,
    },
    install: (window: object) => void,
    setup: (canvasNode: HTMLCanvasElement | null) =>  void,

}

