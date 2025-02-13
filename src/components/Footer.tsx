import Link from 'next/link';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8">
      <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 text-center sm:text-left sm:grid-cols-2 md:grid-cols-4 gap-8">
          {/* Classes Section */}
          <div>
            <h3 className="text-lg font-semibold">Classes</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/classes" className="hover:text-white">All Classes</Link></li>
              <li><Link href="/classes/6-week-pottery-course-irvine" className="hover:text-white">6-Week Pottery Course</Link></li>
              <li><Link href="/classes/adult-pottery-group-class-irvine" className="hover:text-white">Adult Pottery Group Class</Link></li>
              <li><Link href="/classes/kids-and-family-pottery-irvine" className="hover:text-white">Kids & Family Pottery</Link></li>
            </ul>
          </div>
          
          {/* Workshops Section */}
          <div>
            <h3 className="text-lg font-semibold">Workshops</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/workshops" className="hover:text-white">All Workshops</Link></li>
              <li><Link href="/workshops/matcha-bowl-pottery-workshop-irvine" className="hover:text-white">Matcha Bowl Workshop</Link></li>
              <li><Link href="/workshops/teapot-pottery-workshop-irvine" className="hover:text-white">Teapot Workshop</Link></li>
              <li><Link href="/workshops/ikebana-flower-arrangement-workshop-irvine" className="hover:text-white">Ikebana Flower Arrangement</Link></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-lg font-semibold">Library</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/library/celadon" className="hover:text-white">Celadon</Link></li>
              <li><Link href="/library/hakeme" className="hover:text-white">Hakeme</Link></li>
              <li><Link href="/library/kurinuki" className="hover:text-white">Kurinuki</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-lg font-semibold">More</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/events" className="hover:text-white">Events</Link></li>
            </ul>
          </div>
        </div>
        
        <div className="text-center text-gray-400 mt-8 text-sm">
          © {new Date().getFullYear()} Olomana Studios. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}
