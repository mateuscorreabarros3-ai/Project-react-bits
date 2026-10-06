import ElectricBorder from './components/ElectricBorder/ElectricBorder'
import TargetCursor from './assets/targetcursor';
function App() {
return (
<div style={{
display: 'flex',
justifyContent: 'center',
alignItems: 'center',
height: '100vh'
}}>
<ElectricBorder
color="#27f1ff"
speed={1}
chaos={0.5}
borderRadius={16}
>
<div style={{ padding: '40px', fontSize: '24px', color: 'black' }}>
Efeito Super Saiajyn 
</div>
</ElectricBorder>
</div>
)
export default function App() {
  return (
    <div>
      <TargetCursor 
        spinDuration={2}
        hideDefaultCursor
        parallaxOn
        hoverDuration={0.2}
        cursorColor="#ffffff"
        cursorColorOnTarget="#B497CF"
/>
      
      <h1>Hover over the elements below</h1>
      <button className="cursor-target">Click me!</button>
      <div className="cursor-target">Hover target</div>
    </div>
  );
}



}

export default App


