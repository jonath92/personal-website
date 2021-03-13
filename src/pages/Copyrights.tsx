// own features
import { CopyrightsGrid } from 'components/CopyrightsGrid'


const Copyright = () => {
    return (
        <div style={{ width: "90%" }}>
            <h2 className="mb-3">Copyrights</h2>
            <p className="mb-4">All mediafiles except the following are owned by the operator of this website.</p>
            <CopyrightsGrid />
        </div>
    )
}

export { Copyright }