export default function ChildComponent({ prop }: { prop: { color: string, shade: number } }) {
    console.count("Child render");
    return (
        <div>
            <h1>Child Component</h1>
            <p>Color: {prop.color}</p>
            <p>Shade: {prop.shade}</p>
        </div>
    );
}