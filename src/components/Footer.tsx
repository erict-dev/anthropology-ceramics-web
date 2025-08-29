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
              <li><Link href="/classes/4-week-pottery-course-irvine" className="hover:text-white">4-Week Pottery Course</Link></li>
              <li><Link href="/classes/adult-pottery-group-class-irvine" className="hover:text-white">Adult Pottery Group Class</Link></li>
              <li><Link href="/classes/kids-and-family-pottery-irvine" className="hover:text-white">Kids & Family Pottery</Link></li>
              <li><Link href="/classes/beginner-pottery-class-irvine" className="hover:text-white">Beginner Pottery Classes</Link></li>
              <li><Link href="/classes/intermediate-pottery-class-irvine" className="hover:text-white">Intermediate Pottery Classes</Link></li>
              <li><Link href="/classes/private-pottery-event-irvine" className="hover:text-white">Private Pottery Events</Link></li>
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
            <h3 className="text-lg font-semibold">Open Studio</h3>
            <ul className="mt-2 space-y-2 text-gray-300">
              <li><Link href="/open-studio" className="hover:text-white">Memberships</Link></li>
              <li><Link href="/open-studio/afternoon-clay" className="hover:text-white">Afternoon Clay</Link></li>
              <li><Link href="/open-studio/evening-clay" className="hover:text-white">Evening Clay</Link></li>
            </ul>
          </div>
        </div>

        {/* Address & Hours Section */}
        <div className="mt-8 text-center text-gray-300 text-sm">
          <p>14988 Sand Canyon Ave Studio 6, Irvine CA 92618</p>
          <p>Open 10:00am – 8:30pm every day except Tuesdays</p>
        </div>
        
        <div className="text-center text-gray-400 mt-4 text-sm">
          © {new Date().getFullYear()} Olomana Studios. All Rights Reserved.
        </div>
      </div>
    </footer>
  );
}

