import Link from "next/link";

const page = () => {
    return (
        <div>
            {
                blgos.map(blog => <div>
                    <h1>{blog.title}</h1>
                    <p>{blog.description}</p>
                    <Link className="bg-red-400 p-3" href={`/blogs/${blog.slug}`}>view details</Link>
                    </ div>)
            }
        </div>
    );
};

const blgos = [
    {
      "slug": "tech-trends-2024",
      "title": "Top Tech Trends to Watch in 2024",
      "description": "Explore the most anticipated technology trends of 2024, including advancements in AI, quantum computing, and more."
    },
    {
      "slug": "healthy-living-tips",
      "title": "10 Tips for a Healthier Lifestyle",
      "description": "Discover practical tips and strategies to improve your health and well-being through diet, exercise, and mindfulness."
    },
    {
      "slug": "travel-guide-italy",
      "title": "Ultimate Travel Guide to Italy",
      "description": "Plan your perfect Italian getaway with our comprehensive travel guide, covering must-see destinations, local cuisine, and cultural experiences."
    },
    {
      "slug": "financial-freedom-101",
      "title": "Achieving Financial Freedom: A Beginner's Guide",
      "description": "Learn the basics of personal finance, budgeting, and investing to achieve financial independence and security."
    },
    {
      "slug": "sustainable-living-hacks",
      "title": "Easy Hacks for Sustainable Living",
      "description": "Incorporate simple and effective sustainability practices into your daily life to reduce your environmental footprint."
    }
  ]


export default page;