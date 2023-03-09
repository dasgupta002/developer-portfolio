import Card from '../components/card'
import data from '../data/projects.json'

export default function Featured() {
    return (
        <div className = 'md:grid grid-cols-3 gap-4 py-12'>
            { data.map((item, index) => <Card key = { index } props = { item } />) }
        </div>
    )
}