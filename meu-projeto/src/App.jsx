import ElectricBorder from './components/ElectricBorder/ElectricBorder'
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
)}


export default App


