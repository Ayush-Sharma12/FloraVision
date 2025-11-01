// Reusable section title with gradient corner borders
function SectionTitle({ children }) {
  return (
    <div className="text-center mb-10 md:mb-16">
      <h2 className="relative inline-block text-white font-semibold text-[32px] md:text-[44px] px-4">
        
        <span
          className="absolute top-0 right-0 w-8 h-8 rounded-xl"
          style={{
            border: '5px solid transparent', 
            
            borderImage: 'linear-gradient(135deg, #FBD300, #FFFFFF) 1',
            
            borderRadius: '30px', 
            
            borderBottom: 'none',
            borderLeft: 'none',
          }}
        />

        <span
          className="absolute bottom-0 left-0 w-8 h-8"
          style={{
            border: '5px solid transparent', 
            
            borderImage: 'linear-gradient(135deg, #FFFFFF, #FBD300) 1',
            
            borderRadius: '50%',
            
            borderTop: 'none',
            borderRight: 'none',
          }}
        />

        {children}
      </h2>
    </div>
  );
}

export default SectionTitle;