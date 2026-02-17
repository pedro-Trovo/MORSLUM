export default function QuizSVG({ svgContainerRef, svgHtml }) {
  return (
    <div className="mb-1 md:mb-1">
      <div 
        ref={svgContainerRef}
        className="border-round overflow-auto surface-ground p-2"
        style={{ 
          maxWidth: '100%',
          overflow: 'auto',
          WebkitOverflowScrolling: 'touch',
          touchAction: 'pan-x pan-y',
          boxSizing: 'border-box'
        }}
      >
        <div 
          className="flex justify-content-center"
          style={{ 
            minWidth: 'min-content',
            minHeight: '200px'
          }}
        >
          <div
            className="svg-wrapper"
            style={{ 
              maxWidth: '100%',
              overflow: 'visible',
              display: 'flex',
              justifyContent: 'center'
            }}
            dangerouslySetInnerHTML={{ 
              __html: svgHtml?.replace(
                /<svg([^>]*)>/,
                '<svg$1 style="max-width: 100%; height: auto; display: block; min-width: 300px;">'
              ) 
            }}
          />
        </div>
      </div>
    </div>
  );
}
