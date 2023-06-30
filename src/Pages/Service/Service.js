import "./Service.css"
import Menu from "../../Components/Menu/Menu";

function Service() {
  const manicureMenu = [
    { ser: "Quick Nail Art & Polish", price: 15 },
    { ser: "Traditional", price: 20 },
    { ser: "French Manicure", price: 30 },
    { ser: "Colour Change", price: 25 },
    { ser: "Shellac Gel Manicure", price: 35 },
    { ser: "Manicure Shellac for Children \n (6-12 yrs old, the design included)", price: 25 },
  ];

  const pedicureMenu = [
    { ser: "Traditional Pedicure", price: 35},
    { ser: 'Spa Pedicure', price: 40},
    { ser: 'Herbal Spa Pedicure', price: 50},
    { ser: 'Shellac Pedicure', price: 50},
    { ser: 'Shellac Spa Pedicure', price: 60},
    { ser: 'Shellac Herbal Spa Pedicure', price: 70},
    { ser: 'Special Combo Pedi + Mani', price: 50},
    { ser: 'Gel Colour Toes', price: 25}, 
    { ser: 'Paraffin', price: 10},
    { ser: 'Pedicure Shellac for Children \n (6-12 yrs old, design included)', price: 40}
  ]

  const nailsMenu = [
    { ser: 'Solar Basic Clear Full Set', price: 40},
    { ser: 'Solar Refills Colour', price: 45},
    { ser: 'Solar Pink & White Full Set', price: 55},
    { ser: 'Solar Pink & White Refills', price: 50},
    { ser: 'Solar Ombre Full Set', price: 60},
    { ser: 'Solar Ombre Refills', price: 55},
    { ser: 'Gel Nails Full Set', price: 60},
    { ser: 'Gel Nails Refills', price: 50},
    { ser: 'Sculpture Gel Full Set', price: 75},
    { ser: 'Sculpture Gel Refills', price: 60},
    { ser: 'French Tips', price: '5 & Up' },
    { ser: 'Gel Colour', price: 15},
    { ser: 'Removal', price: '10 & Up'},
    { ser: 'Nail Repair', price: '5 & Up'},
    { ser: 'Designs', price: '5 & Up' },
    { ser: 'Polish Change', pice: '10 & Up' },
    { ser: 'Nail Cut Down', pice: '10 & Up'}
  ]

  const waxingMenu = [
    { ser: 'Eyebrows', price: 10},
    { ser: 'Lips', price: 6},
    { ser: 'Chin', price: 8},
    { ser: 'Face', price: 35},
    { ser: 'Under Arms', price: 18},
    { ser: 'Half Arms', price: 25},
    { ser: 'Full Arms', price: '35 & Up' },
    { ser: 'Half Legs', price: '30 & Up' },
    { ser: 'Full Legs', price: '50 & Up' },
    { ser: 'Bikini', price : '30 & Up' },
    { ser: 'Brazilian', price: '50 & Up' },
    { ser: 'Back', price: '45 & Up' },
    { ser: 'Chest', price: '35 & Up' },
    { ser: 'Eyebrow Tinting', price: 15}
  ]
  return (
    <div>
      <div className="pt-10 pb-2.5">
        <div className="screen mga title-text text-[30px] text-center small:text-left">
          our Service
        </div>
      </div>
      <div className="screen mga py-[50px]">

        <div className="py-5 small:flex ">
          <div className="w-4/12 px-[15px] mx-auto">
            <div className="circle-service-image img-manicure"></div>
          </div>
          <Menu detail={manicureMenu} name={"MANICURE"} />
        </div>

        <div className="py-5 small:flex medium:flex-row-reverse">
          <div className="w-4/12 px-[15px] mx-auto">
            <div className="circle-service-image img-pedicure"></div>
          </div>
          <Menu detail={pedicureMenu} name={"pedicure"} />
        </div>

        <div className="py-5 small:flex">
          <div className="w-4/12 px-[15px] mx-auto">
            <div className="circle-service-image img-nails"></div>
          </div>
          <Menu detail={nailsMenu} name={"acrylic-gel nails"} />
        </div>

        <div className="py-5 small:flex medium:flex-row-reverse">
          <div className="w-4/12 px-[15px] mx-auto">
            <div className="circle-service-image img-waxing"></div>
          </div>
          <Menu detail={waxingMenu} name={"waxing"} />
        </div>

      </div>

    </div>
  );
}

export default Service;
