const countries = ['Afghanistan', 'Albania', 'Algeria', 'Andorra', 'Angola', 'Antigua and Barbuda', 'Argentina', 'Armenia', 'Australia', 'Austria', 'Azerbaijan',  // 11
                        'Bahamas', 'Bahrain', 'Bangladesh', 'Barbados', 'Belarus', 'Belgium', 'Belize', 'Benin', 'Bhutan', 'Bolivia', 'Bosnia and Herzegovina', 'Botswana', 'Brazil', 'Brunei', 'Bulgaria', 'Burkina Faso', 'Burundi', // 17
                        "Côte d'Ivoire", 'Cabo verde', 'Cambodia', 'Cameroon', 'Canada', 'Central African Republic', 'Chad', 'Chile', 'China', 'Colombia', 'Comoros', 'Congo', 'Costa Rica', 'Croatia', 'Cuba', 'Cyprus', 'Czechia', // 17
                        'Democratic Republic of Congo', 'Denmark', 'Djibouti', 'Dominica', 'Dominican Republic', // 5
                        'East Timor', 'Ecuador', 'Egypt', 'El Salvador', 'Equatorial Guinea', 'Eritrea', 'Estonia', 'Eswatini', 'Ethiopia', 
                        'Fiji', 'Finland', 'France', // 3
                        'Gabon', 'Gambia', 'Georgia', 'Germany', 'Ghana', 'Greece', 'Grenada', 'Guatemala', 'Guinea', // 10
                        'Guinea-Bissau', 'Guyana', 'Haiti', 'Honduras', 'Hungary', 'Iceland', 'India', 'Indonesia', 'Iran', // 9
                        'Iraq', 'Ireland', 'Israel', 'Italy', 'Jamaica', 'Japan', 'Jordan', 'Kazakhstan', 'Kenya', 'Kiribati', // 10
                        'Kuwait', 'Kyrgyzstan', 'Laos', 'Latvia', 'Lebanon', 'Lesotho', 'Liberia', 'Libya', 'Liechtenstein', 'Lithuania', // 10
                        'Luxembourg', 'Madagascar', 'Malawi', 'Malaysia', 'Maldives', 'Mali', 'Malta', 'Marshall Islands', 'Mauritania', 'Mauritius', // 10
                        'Mexico', 'Micronesia', 'Moldova', 'Monaco', 'Mongolia', 'Montenegro', 'Morocco', 'Mozambique', 'Myanmar', 'Namibia', // 10
                        'Nauru', 'Nepal', 'Netherlands', 'New Zealand', 'Nicaragua', 'Niger', 'Nigeria', 'North Korea', 'North Macedonia', 'Norway', // 10
                        'Oman', 'Pakistan', 'Palau', 'Palestine', 'Panama', 'Papua New Guinea', 'Paraguay', 'Peru', 'Philippines', 'Poland', // 10
                        'Portugal', 'Qatar', 'Romania', 'Russia', 'Rwanda', 'Saint Kitts and Nevis', 'Saint Lucia', 'Saint Vincent and the Grenadines', 'Samoa', 'San Marino', // 10
                        'Sao Tome and Principe', 'Saudi Arabia', 'Senegal', 'Serbia', 'Seychelles', 'Sierra Leone', 'Singapore', 'Slovakia', 'Slovenia', 'Solomon Islands', // 10
                        'Somalia', 'South Africa', 'South Korea', 'South Sudan', 'Spain', 'Sri Lanka', 'Sudan', 'Suriname', 'Sweden', 'Switzerland', // 10
                        'Syria', 'Tajikistan', 'Tanzania', 'Thailand', 'Togo', 'Tonga', 'Trinidad and Tobago', 'Tunisia', 'Turkey', // 9
                        'Turkmenistan', 'Tuvalu', 'Uganda', 'Ukraine', 'United Arab Emirates', 'United Kingdom', 'United States of America', 'Uruguay', 'Uzbekistan', 'Vanuatu', // 10 
                        'Vatican', 'Venezuela', 'Vietnam', 'Yemen', 'Zambia', 'Zimbabwe' // 6
                    ]; // 195

const flags = ['flags/af.png', 'flags/al.png', 'flags/dz.png', 'flags/ad.png', 'flags/ao.png', 'flags/ag.png', 'flags/ar.png', 'flags/am.png', 'flags/au.png', 'flags/at.png', 'flags/az.png', // 11
                    'flags/bs.png', 'flags/bh.png', 'flags/bd.png', 'flags/bb.png', 'flags/by.png', 'flags/be.png', 'flags/bz.png', 'flags/bj.png', 'flags/bt.png', 'flags/bo.png', 'flags/ba.png', 'flags/bw.png', 'flags/br.png', 'flags/bn.png', 'flags/bg.png', 'flags/bf.png', 'flags/bi.png', // 17
                    'flags/ci.png', 'flags/cv.png', 'flags/kh.png', 'flags/cm.png', 'flags/ca.png', 'flags/cf.png', 'flags/td.png', 'flags/cl.png', 'flags/cn.png', 'flags/co.png', 'flags/km.png', 'flags/cg.png', 'flags/cr.png', 'flags/hr.png', 'flags/cu.png', 'flags/cy.png', 'flags/cz.png', // 17
                    'flags/cd.png' /* DRC */, 'flags/dk.png', 'flags/dj.png', 'flags/dm.png', 'flags/do.png', // 5
                    'flags/tl.png', 'flags/ec.png', 'flags/eg.png', 'flags/sv.png', 'flags/gq.png', 'flags/er.png', 'flags/sz.png', 'flags/ee.png', 'flags/et.png', // 9
                    'flags/fj.png', 'flags/fi.png', 'flags/fr.png', // 3
                    'flags/ga.png', 'flags/gm.png', 'flags/ge.png', 'flags/de.png', 'flags/gh.png', 'flags/gr.png', 'flags/gd.png', 'flags/gt.png', 'flags/gn.png', // 10
                    'flags/gw.png', 'flags/gy.png', 'flags/ht.png', 'flags/hn.png', 'flags/hu.png', 'flags/is.png', 'flags/in.png', 'flags/id.png', 'flags/ir.png',  // 9
                    'flags/iq.png', 'flags/ie.png', 'flags/il.png', 'flags/it.png', 'flags/jm.png', 'flags/jp.png', 'flags/jo.png', 'flags/kz.png', 'flags/ke.png', 'flags/ki.png', // 10
                    'flags/kw.png', 'flags/kg.png', 'flags/la.png', 'flags/lv.png', 'flags/lb.png', 'flags/ls.png', 'flags/lr.png', 'flags/ly.png', 'flags/li.png', 'flags/lt.png', // 10
                    'flags/lu.png', 'flags/mg.png', 'flags/mw.png', 'flags/my.png', 'flags/mv.png', 'flags/ml.png', 'flags/mt.png', 'flags/mh.png', 'flags/mr.png', 'flags/mu.png', // 10
                    'flags/mx.png', 'flags/fm.png', 'flags/md.png', 'flags/mc.png', 'flags/mn.png', 'flags/me.png', 'flags/ma.png', 'flags/mz.png', 'flags/mm.png', 'flags/na.png', // 10
                    'flags/nr.png', 'flags/np.png', 'flags/nl.png', 'flags/nz.png', 'flags/ni.png', 'flags/ne.png', 'flags/ng.png', 'flags/kp.png', 'flags/mk.png', 'flags/no.png', // 10
                    'flags/om.png', 'flags/pk.png', 'flags/pw.png', 'flags/ps.png', 'flags/pa.png', 'flags/pg.png', 'flags/py.png', 'flags/pe.png', 'flags/ph.png', 'flags/pl.png', // 10
                    'flags/pt.png', 'flags/qa.png', 'flags/ro.png', 'flags/ru.png', 'flags/rw.png', 'flags/kn.png', 'flags/lc.png', 'flags/vc.png', 'flags/ws.png', 'flags/sm.png', // 10
                    'flags/st.png', 'flags/sa.png', 'flags/sn.png', 'flags/rs.png', 'flags/sc.png', 'flags/sl.png', 'flags/sg.png', 'flags/sk.png', 'flags/si.png', 'flags/sb.png', // 10
                    'flags/so.png', 'flags/za.png', 'flags/kr.png', 'flags/ss.png', 'flags/es.png', 'flags/lk.png', 'flags/sd.png', 'flags/sr.png', 'flags/se.png', 'flags/ch.png', // 10
                    'flags/sy.png', 'flags/tj.png', 'flags/tz.png', 'flags/th.png', 'flags/tg.png', 'flags/to.png', 'flags/tt.png', 'flags/tn.png', 'flags/tr.png', // 9
                    'flags/tm.png', 'flags/tv.png', 'flags/ug.png', 'flags/ua.png', 'flags/ae.png', 'flags/gb.png', 'flags/us.png', 'flags/uy.png', 'flags/uz.png', 'flags/vu.png', // 10
                    'flags/va.png', 'flags/ve.png', 'flags/vn.png', 'flags/ye.png', 'flags/zm.png', 'flags/zw.png' // 6
                ]; // 195

const randomCountryIndex = Math.floor(Math.random() * countries.length);

const randomIndex1 = Math.floor(Math.random() * flags.length);
const randomIndex2 = Math.floor(Math.random() * flags.length);
const randomIndex3 = Math.floor(Math.random() * flags.length);

const randomCountry = countries[randomCountryIndex];

const playButton = document.querySelector('.play-button');

const randomFlag1 = flags[randomIndex1];
const randomFlag2 = flags[randomIndex2];
const randomFlag3 = flags[randomIndex3];

const correctCountry = flags[randomCountryIndex];

const correctOption = Math.random();

playButton.addEventListener('click', () => {
    document.querySelector('.question').innerHTML = 'Choose the flag of:';

    document.querySelector('.country').innerHTML = randomCountry;

    document.querySelector('.options').innerHTML += '<button class="option1"></button>';
    document.querySelector('.options').innerHTML += '<button class="option2"></button>';
    document.querySelector('.options').innerHTML += '<button class="option3"></button>';

    const option1 = document.querySelector('.option1');
    option1.innerHTML = `<img class="option1-flag" src="${randomFlag1}"></img>`;
    
    const option2 = document.querySelector('.option2');
    option2.innerHTML = `<img class="option2-flag" src="${randomFlag2}"></img>`;

    const option3 = document.querySelector('.option3');
    option3.innerHTML = `<img class="option3-flag" src="${randomFlag3}"></img>`;

    document.querySelector('.option1').addEventListener('click', () => {
        console.log(option1.innerHTML);
    })

    document.querySelector('.option2').addEventListener('click', () => {
        console.log(option2.innerHTML);
    })

    document.querySelector('.option3').addEventListener('click', () => {
        console.log(option3.innerHTML);
    })
})
