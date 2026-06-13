export default function Grid({ label = "Pixel grid", description }) {
    return (
        <figure
            role="img"
            aria-label={label}
            aria-describedby={description ? "grid-desc" : undefined}
            className="padding"
        >
            {description && (
                <figcaption id="grid-desc" className="sr-only">
                    {description}
                </figcaption>
            )}
            <div
                className="grid-spot"
                aria-hidden="true"
            />
        </figure>
    )
}
