import{h as tt,E as et,o as st,c as it,a as H,D as rt,n as nt,u as ot,_ as at,G as _t,r as y,e as ct}from"./vu7MYg1j.js";const ut="data:image/svg+xml,%3csvg%20width='12'%20height='12'%20viewBox='0%200%2012%2012'%20fill='none'%20xmlns='http://www.w3.org/2000/svg'%3e%3cpath%20d='M8.78329%206.66663H0.666626V5.33329H8.78329L5.04996%201.59996L5.99996%200.666626L11.3333%205.99996L5.99996%2011.3333L5.04996%2010.4L8.78329%206.66663Z'%20fill='%23171511'/%3e%3c/svg%3e",ht=tt({__name:"ArrowButton",props:["reversed"],setup(t){const e=et(()=>({transform:t.reversed?"rotate(180deg)":"rotate(0deg)"}));return(s,i)=>(st(),it("button",null,[H("h4",null,[rt(s.$slots,"default",{},void 0),H("img",{src:ut,alt:"Arrow forward",style:nt(ot(e))},null,4)])]))}}),Zt=at(ht,[["__scopeId","data-v-b08b91eb"]]);var h=typeof globalThis<"u"?globalThis:typeof window<"u"?window:typeof global<"u"?global:typeof self<"u"?self:{};function lt(t){if(t.__esModule)return t;var e=t.default;if(typeof e=="function"){var s=function i(){return this instanceof i?Reflect.construct(e,arguments,this.constructor):e.apply(this,arguments)};s.prototype=e.prototype}else s={};return Object.defineProperty(s,"__esModule",{value:!0}),Object.keys(t).forEach(function(i){var r=Object.getOwnPropertyDescriptor(t,i);Object.defineProperty(s,i,r.get?r:{enumerable:!0,get:function(){return t[i]}})}),s}var L={};const x=2,p=4,d=4,K=4,m=new Int32Array(2),R=new Float32Array(m.buffer),C=new Float64Array(m.buffer),w=new Uint16Array(new Uint8Array([1,0]).buffer)[0]===1;var S;(function(t){t[t.UTF8_BYTES=1]="UTF8_BYTES",t[t.UTF16_STRING=2]="UTF16_STRING"})(S||(S={}));class g{constructor(e){this.bytes_=e,this.position_=0,this.text_decoder_=new TextDecoder}static allocate(e){return new g(new Uint8Array(e))}clear(){this.position_=0}bytes(){return this.bytes_}position(){return this.position_}setPosition(e){this.position_=e}capacity(){return this.bytes_.length}readInt8(e){return this.readUint8(e)<<24>>24}readUint8(e){return this.bytes_[e]}readInt16(e){return this.readUint16(e)<<16>>16}readUint16(e){return this.bytes_[e]|this.bytes_[e+1]<<8}readInt32(e){return this.bytes_[e]|this.bytes_[e+1]<<8|this.bytes_[e+2]<<16|this.bytes_[e+3]<<24}readUint32(e){return this.readInt32(e)>>>0}readInt64(e){return BigInt.asIntN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readUint64(e){return BigInt.asUintN(64,BigInt(this.readUint32(e))+(BigInt(this.readUint32(e+4))<<BigInt(32)))}readFloat32(e){return m[0]=this.readInt32(e),R[0]}readFloat64(e){return m[w?0:1]=this.readInt32(e),m[w?1:0]=this.readInt32(e+4),C[0]}writeInt8(e,s){this.bytes_[e]=s}writeUint8(e,s){this.bytes_[e]=s}writeInt16(e,s){this.bytes_[e]=s,this.bytes_[e+1]=s>>8}writeUint16(e,s){this.bytes_[e]=s,this.bytes_[e+1]=s>>8}writeInt32(e,s){this.bytes_[e]=s,this.bytes_[e+1]=s>>8,this.bytes_[e+2]=s>>16,this.bytes_[e+3]=s>>24}writeUint32(e,s){this.bytes_[e]=s,this.bytes_[e+1]=s>>8,this.bytes_[e+2]=s>>16,this.bytes_[e+3]=s>>24}writeInt64(e,s){this.writeInt32(e,Number(BigInt.asIntN(32,s))),this.writeInt32(e+4,Number(BigInt.asIntN(32,s>>BigInt(32))))}writeUint64(e,s){this.writeUint32(e,Number(BigInt.asUintN(32,s))),this.writeUint32(e+4,Number(BigInt.asUintN(32,s>>BigInt(32))))}writeFloat32(e,s){R[0]=s,this.writeInt32(e,m[0])}writeFloat64(e,s){C[0]=s,this.writeInt32(e,m[w?0:1]),this.writeInt32(e+4,m[w?1:0])}getBufferIdentifier(){if(this.bytes_.length<this.position_+p+d)throw new Error("FlatBuffers: ByteBuffer is too short to contain an identifier.");let e="";for(let s=0;s<d;s++)e+=String.fromCharCode(this.readInt8(this.position_+p+s));return e}__offset(e,s){const i=e-this.readInt32(e);return s<this.readInt16(i)?this.readInt16(i+s):0}__union(e,s){return e.bb_pos=s+this.readInt32(s),e.bb=this,e}__string(e,s){e+=this.readInt32(e);const i=this.readInt32(e);e+=p;const r=this.bytes_.subarray(e,e+i);return s===S.UTF8_BYTES?r:this.text_decoder_.decode(r)}__union_with_string(e,s){return typeof e=="string"?this.__string(s):this.__union(e,s)}__indirect(e){return e+this.readInt32(e)}__vector(e){return e+this.readInt32(e)+p}__vector_len(e){return this.readInt32(e+this.readInt32(e))}__has_identifier(e){if(e.length!=d)throw new Error("FlatBuffers: file identifier must be length "+d);for(let s=0;s<d;s++)if(e.charCodeAt(s)!=this.readInt8(this.position()+p+s))return!1;return!0}createScalarList(e,s){const i=[];for(let r=0;r<s;++r){const _=e(r);_!==null&&i.push(_)}return i}createObjList(e,s){const i=[];for(let r=0;r<s;++r){const _=e(r);_!==null&&i.push(_.unpack())}return i}}class ${constructor(e){this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null,this.text_encoder=new TextEncoder;let s;e?s=e:s=1024,this.bb=g.allocate(s),this.space=s}clear(){this.bb.clear(),this.space=this.bb.capacity(),this.minalign=1,this.vtable=null,this.vtable_in_use=0,this.isNested=!1,this.object_start=0,this.vtables=[],this.vector_num_elems=0,this.force_defaults=!1,this.string_maps=null}forceDefaults(e){this.force_defaults=e}dataBuffer(){return this.bb}asUint8Array(){return this.bb.bytes().subarray(this.bb.position(),this.bb.position()+this.offset())}prep(e,s){e>this.minalign&&(this.minalign=e);const i=~(this.bb.capacity()-this.space+s)+1&e-1;for(;this.space<i+e+s;){const r=this.bb.capacity();this.bb=$.growByteBuffer(this.bb),this.space+=this.bb.capacity()-r}this.pad(i)}pad(e){for(let s=0;s<e;s++)this.bb.writeInt8(--this.space,0)}writeInt8(e){this.bb.writeInt8(this.space-=1,e)}writeInt16(e){this.bb.writeInt16(this.space-=2,e)}writeInt32(e){this.bb.writeInt32(this.space-=4,e)}writeInt64(e){this.bb.writeInt64(this.space-=8,e)}writeFloat32(e){this.bb.writeFloat32(this.space-=4,e)}writeFloat64(e){this.bb.writeFloat64(this.space-=8,e)}addInt8(e){this.prep(1,0),this.writeInt8(e)}addInt16(e){this.prep(2,0),this.writeInt16(e)}addInt32(e){this.prep(4,0),this.writeInt32(e)}addInt64(e){this.prep(8,0),this.writeInt64(e)}addFloat32(e){this.prep(4,0),this.writeFloat32(e)}addFloat64(e){this.prep(8,0),this.writeFloat64(e)}addFieldInt8(e,s,i){(this.force_defaults||s!=i)&&(this.addInt8(s),this.slot(e))}addFieldInt16(e,s,i){(this.force_defaults||s!=i)&&(this.addInt16(s),this.slot(e))}addFieldInt32(e,s,i){(this.force_defaults||s!=i)&&(this.addInt32(s),this.slot(e))}addFieldInt64(e,s,i){(this.force_defaults||s!==i)&&(this.addInt64(s),this.slot(e))}addFieldFloat32(e,s,i){(this.force_defaults||s!=i)&&(this.addFloat32(s),this.slot(e))}addFieldFloat64(e,s,i){(this.force_defaults||s!=i)&&(this.addFloat64(s),this.slot(e))}addFieldOffset(e,s,i){(this.force_defaults||s!=i)&&(this.addOffset(s),this.slot(e))}addFieldStruct(e,s,i){s!=i&&(this.nested(s),this.slot(e))}nested(e){if(e!=this.offset())throw new TypeError("FlatBuffers: struct must be serialized inline.")}notNested(){if(this.isNested)throw new TypeError("FlatBuffers: object serialization must not be nested.")}slot(e){this.vtable!==null&&(this.vtable[e]=this.offset())}offset(){return this.bb.capacity()-this.space}static growByteBuffer(e){const s=e.capacity();if(s&3221225472)throw new Error("FlatBuffers: cannot grow buffer beyond 2 gigabytes.");const i=s<<1,r=g.allocate(i);return r.setPosition(i-s),r.bytes().set(e.bytes(),i-s),r}addOffset(e){this.prep(p,0),this.writeInt32(this.offset()-e+p)}startObject(e){this.notNested(),this.vtable==null&&(this.vtable=[]),this.vtable_in_use=e;for(let s=0;s<e;s++)this.vtable[s]=0;this.isNested=!0,this.object_start=this.offset()}endObject(){if(this.vtable==null||!this.isNested)throw new Error("FlatBuffers: endObject called without startObject");this.addInt32(0);const e=this.offset();let s=this.vtable_in_use-1;for(;s>=0&&this.vtable[s]==0;s--);const i=s+1;for(;s>=0;s--)this.addInt16(this.vtable[s]!=0?e-this.vtable[s]:0);const r=2;this.addInt16(e-this.object_start);const _=(i+r)*x;this.addInt16(_);let u=0;const l=this.space;t:for(s=0;s<this.vtables.length;s++){const c=this.bb.capacity()-this.vtables[s];if(_==this.bb.readInt16(c)){for(let n=x;n<_;n+=x)if(this.bb.readInt16(l+n)!=this.bb.readInt16(c+n))continue t;u=this.vtables[s];break}}return u?(this.space=this.bb.capacity()-e,this.bb.writeInt32(this.space,u-e)):(this.vtables.push(this.offset()),this.bb.writeInt32(this.bb.capacity()-e,this.offset()-e)),this.isNested=!1,e}finish(e,s,i){const r=i?K:0;if(s){const _=s;if(this.prep(this.minalign,p+d+r),_.length!=d)throw new TypeError("FlatBuffers: file identifier must be length "+d);for(let u=d-1;u>=0;u--)this.writeInt8(_.charCodeAt(u))}this.prep(this.minalign,p+r),this.addOffset(e),r&&this.addInt32(this.bb.capacity()-this.space),this.bb.setPosition(this.space)}finishSizePrefixed(e,s){this.finish(e,s,!0)}requiredField(e,s){const i=this.bb.capacity()-e,r=i-this.bb.readInt32(i);if(!(s<this.bb.readInt16(r)&&this.bb.readInt16(r+s)!=0))throw new TypeError("FlatBuffers: field "+s+" must be set")}startVector(e,s,i){this.notNested(),this.vector_num_elems=s,this.prep(p,e*s),this.prep(i,e*s)}endVector(){return this.writeInt32(this.vector_num_elems),this.offset()}createSharedString(e){if(!e)return 0;if(this.string_maps||(this.string_maps=new Map),this.string_maps.has(e))return this.string_maps.get(e);const s=this.createString(e);return this.string_maps.set(e,s),s}createString(e){if(e==null)return 0;let s;return e instanceof Uint8Array?s=e:s=this.text_encoder.encode(e),this.addInt8(0),this.startVector(1,s.length,1),this.bb.setPosition(this.space-=s.length),this.bb.bytes().set(s,this.space),this.endVector()}createByteVector(e){return e==null?0:(this.startVector(1,e.length,1),this.bb.setPosition(this.space-=e.length),this.bb.bytes().set(e,this.space),this.endVector())}createObjectOffset(e){return e===null?0:typeof e=="string"?this.createString(e):e.pack(this)}createObjectOffsetList(e){const s=[];for(let i=0;i<e.length;++i){const r=e[i];if(r!==null)s.push(this.createObjectOffset(r));else throw new TypeError("FlatBuffers: Argument for createObjectOffsetList cannot contain null.")}return s}createStructOffsetList(e,s){return s(this,e.length),this.createObjectOffsetList(e.slice().reverse()),this.endVector()}}const ft=Object.freeze(Object.defineProperty({__proto__:null,Builder:$,ByteBuffer:g,get Encoding(){return S},FILE_IDENTIFIER_LENGTH:d,SIZEOF_INT:p,SIZEOF_SHORT:x,SIZE_PREFIX_LENGTH:K,float32:R,float64:C,int32:m,isLittleEndian:w},Symbol.toStringTag,{value:"Module"})),j=lt(ft);var F={},A={};Object.defineProperty(A,"__esModule",{value:!0});A.Model=void 0;var G;(function(t){t[t.undefined=0]="undefined",t[t.best_match=1]="best_match",t[t.gfs_seamless=2]="gfs_seamless",t[t.gfs_global=3]="gfs_global",t[t.gfs_hrrr=4]="gfs_hrrr",t[t.meteofrance_seamless=5]="meteofrance_seamless",t[t.meteofrance_arpege_seamless=6]="meteofrance_arpege_seamless",t[t.meteofrance_arpege_world=7]="meteofrance_arpege_world",t[t.meteofrance_arpege_europe=8]="meteofrance_arpege_europe",t[t.meteofrance_arome_seamless=9]="meteofrance_arome_seamless",t[t.meteofrance_arome_france=10]="meteofrance_arome_france",t[t.meteofrance_arome_france_hd=11]="meteofrance_arome_france_hd",t[t.jma_seamless=12]="jma_seamless",t[t.jma_msm=13]="jma_msm",t[t.jms_gsm=14]="jms_gsm",t[t.jma_gsm=15]="jma_gsm",t[t.gem_seamless=16]="gem_seamless",t[t.gem_global=17]="gem_global",t[t.gem_regional=18]="gem_regional",t[t.gem_hrdps_continental=19]="gem_hrdps_continental",t[t.icon_seamless=20]="icon_seamless",t[t.icon_global=21]="icon_global",t[t.icon_eu=22]="icon_eu",t[t.icon_d2=23]="icon_d2",t[t.ecmwf_ifs04=24]="ecmwf_ifs04",t[t.metno_nordic=25]="metno_nordic",t[t.era5_seamless=26]="era5_seamless",t[t.era5=27]="era5",t[t.cerra=28]="cerra",t[t.era5_land=29]="era5_land",t[t.ecmwf_ifs=30]="ecmwf_ifs",t[t.gwam=31]="gwam",t[t.ewam=32]="ewam",t[t.glofas_seamless_v3=33]="glofas_seamless_v3",t[t.glofas_forecast_v3=34]="glofas_forecast_v3",t[t.glofas_consolidated_v3=35]="glofas_consolidated_v3",t[t.glofas_seamless_v4=36]="glofas_seamless_v4",t[t.glofas_forecast_v4=37]="glofas_forecast_v4",t[t.glofas_consolidated_v4=38]="glofas_consolidated_v4",t[t.gfs025=39]="gfs025",t[t.gfs05=40]="gfs05",t[t.CMCC_CM2_VHR4=41]="CMCC_CM2_VHR4",t[t.FGOALS_f3_H_highresSST=42]="FGOALS_f3_H_highresSST",t[t.FGOALS_f3_H=43]="FGOALS_f3_H",t[t.HiRAM_SIT_HR=44]="HiRAM_SIT_HR",t[t.MRI_AGCM3_2_S=45]="MRI_AGCM3_2_S",t[t.EC_Earth3P_HR=46]="EC_Earth3P_HR",t[t.MPI_ESM1_2_XR=47]="MPI_ESM1_2_XR",t[t.NICAM16_8S=48]="NICAM16_8S",t[t.cams_europe=49]="cams_europe",t[t.cams_global=50]="cams_global",t[t.cfsv2=51]="cfsv2",t[t.era5_ocean=52]="era5_ocean",t[t.cma_grapes_global=53]="cma_grapes_global",t[t.bom_access_global=54]="bom_access_global",t[t.bom_access_global_ensemble=55]="bom_access_global_ensemble",t[t.arpae_cosmo_seamless=56]="arpae_cosmo_seamless",t[t.arpae_cosmo_2i=57]="arpae_cosmo_2i",t[t.arpae_cosmo_2i_ruc=58]="arpae_cosmo_2i_ruc",t[t.arpae_cosmo_5m=59]="arpae_cosmo_5m",t[t.ecmwf_ifs025=60]="ecmwf_ifs025",t[t.ecmwf_aifs025=61]="ecmwf_aifs025",t[t.gfs013=62]="gfs013",t[t.gfs_graphcast025=63]="gfs_graphcast025",t[t.ecmwf_wam025=64]="ecmwf_wam025",t[t.meteofrance_wave=65]="meteofrance_wave",t[t.meteofrance_currents=66]="meteofrance_currents",t[t.ecmwf_wam025_ensemble=67]="ecmwf_wam025_ensemble",t[t.ncep_gfswave025=68]="ncep_gfswave025",t[t.ncep_gefswave025=69]="ncep_gefswave025",t[t.knmi_seamless=70]="knmi_seamless",t[t.knmi_harmonie_arome_europe=71]="knmi_harmonie_arome_europe",t[t.knmi_harmonie_arome_netherlands=72]="knmi_harmonie_arome_netherlands",t[t.dmi_seamless=73]="dmi_seamless",t[t.dmi_harmonie_arome_europe=74]="dmi_harmonie_arome_europe",t[t.metno_seamless=75]="metno_seamless",t[t.era5_ensemble=76]="era5_ensemble",t[t.ecmwf_ifs_analysis=77]="ecmwf_ifs_analysis",t[t.ecmwf_ifs_long_window=78]="ecmwf_ifs_long_window",t[t.ecmwf_ifs_analysis_long_window=79]="ecmwf_ifs_analysis_long_window",t[t.ukmo_global_deterministic_10km=80]="ukmo_global_deterministic_10km",t[t.ukmo_uk_deterministic_2km=81]="ukmo_uk_deterministic_2km",t[t.ukmo_seamless=82]="ukmo_seamless"})(G||(A.Model=G={}));var z={},T={},P={};Object.defineProperty(P,"__esModule",{value:!0});P.Aggregation=void 0;var Z;(function(t){t[t.none=0]="none",t[t.minimum=1]="minimum",t[t.maximum=2]="maximum",t[t.mean=3]="mean",t[t.p10=4]="p10",t[t.p25=5]="p25",t[t.median=6]="median",t[t.p75=7]="p75",t[t.p90=8]="p90",t[t.dominant=9]="dominant",t[t.sum=10]="sum",t[t.spread=11]="spread"})(Z||(P.Aggregation=Z={}));var B={};Object.defineProperty(B,"__esModule",{value:!0});B.Unit=void 0;var X;(function(t){t[t.undefined=0]="undefined",t[t.celsius=1]="celsius",t[t.centimetre=2]="centimetre",t[t.cubic_metre_per_cubic_metre=3]="cubic_metre_per_cubic_metre",t[t.cubic_metre_per_second=4]="cubic_metre_per_second",t[t.degree_direction=5]="degree_direction",t[t.dimensionless_integer=6]="dimensionless_integer",t[t.dimensionless=7]="dimensionless",t[t.european_air_quality_index=8]="european_air_quality_index",t[t.fahrenheit=9]="fahrenheit",t[t.feet=10]="feet",t[t.fraction=11]="fraction",t[t.gdd_celsius=12]="gdd_celsius",t[t.geopotential_metre=13]="geopotential_metre",t[t.grains_per_cubic_metre=14]="grains_per_cubic_metre",t[t.gram_per_kilogram=15]="gram_per_kilogram",t[t.hectopascal=16]="hectopascal",t[t.hours=17]="hours",t[t.inch=18]="inch",t[t.iso8601=19]="iso8601",t[t.joule_per_kilogram=20]="joule_per_kilogram",t[t.kelvin=21]="kelvin",t[t.kilopascal=22]="kilopascal",t[t.kilogram_per_square_metre=23]="kilogram_per_square_metre",t[t.kilometres_per_hour=24]="kilometres_per_hour",t[t.knots=25]="knots",t[t.megajoule_per_square_metre=26]="megajoule_per_square_metre",t[t.metre_per_second_not_unit_converted=27]="metre_per_second_not_unit_converted",t[t.metre_per_second=28]="metre_per_second",t[t.metre=29]="metre",t[t.micrograms_per_cubic_metre=30]="micrograms_per_cubic_metre",t[t.miles_per_hour=31]="miles_per_hour",t[t.millimetre=32]="millimetre",t[t.pascal=33]="pascal",t[t.per_second=34]="per_second",t[t.percentage=35]="percentage",t[t.seconds=36]="seconds",t[t.unix_time=37]="unix_time",t[t.us_air_quality_index=38]="us_air_quality_index",t[t.watt_per_square_metre=39]="watt_per_square_metre",t[t.wmo_code=40]="wmo_code"})(X||(B.Unit=X={}));var E={};Object.defineProperty(E,"__esModule",{value:!0});E.Variable=void 0;var Y;(function(t){t[t.undefined=0]="undefined",t[t.apparent_temperature=1]="apparent_temperature",t[t.cape=2]="cape",t[t.cloud_cover=3]="cloud_cover",t[t.cloud_cover_high=4]="cloud_cover_high",t[t.cloud_cover_low=5]="cloud_cover_low",t[t.cloud_cover_mid=6]="cloud_cover_mid",t[t.daylight_duration=7]="daylight_duration",t[t.dew_point=8]="dew_point",t[t.diffuse_radiation=9]="diffuse_radiation",t[t.diffuse_radiation_instant=10]="diffuse_radiation_instant",t[t.direct_normal_irradiance=11]="direct_normal_irradiance",t[t.direct_normal_irradiance_instant=12]="direct_normal_irradiance_instant",t[t.direct_radiation=13]="direct_radiation",t[t.direct_radiation_instant=14]="direct_radiation_instant",t[t.et0_fao_evapotranspiration=15]="et0_fao_evapotranspiration",t[t.evapotranspiration=16]="evapotranspiration",t[t.freezing_level_height=17]="freezing_level_height",t[t.growing_degree_days=18]="growing_degree_days",t[t.is_day=19]="is_day",t[t.latent_heat_flux=20]="latent_heat_flux",t[t.leaf_wetness_probability=21]="leaf_wetness_probability",t[t.lifted_index=22]="lifted_index",t[t.lightning_potential=23]="lightning_potential",t[t.precipitation=24]="precipitation",t[t.precipitation_hours=25]="precipitation_hours",t[t.precipitation_probability=26]="precipitation_probability",t[t.pressure_msl=27]="pressure_msl",t[t.rain=28]="rain",t[t.relative_humidity=29]="relative_humidity",t[t.runoff=30]="runoff",t[t.sensible_heat_flux=31]="sensible_heat_flux",t[t.shortwave_radiation=32]="shortwave_radiation",t[t.shortwave_radiation_instant=33]="shortwave_radiation_instant",t[t.showers=34]="showers",t[t.snow_depth=35]="snow_depth",t[t.snow_height=36]="snow_height",t[t.snowfall=37]="snowfall",t[t.snowfall_height=38]="snowfall_height",t[t.snowfall_water_equivalent=39]="snowfall_water_equivalent",t[t.sunrise=40]="sunrise",t[t.sunset=41]="sunset",t[t.soil_moisture=42]="soil_moisture",t[t.soil_moisture_index=43]="soil_moisture_index",t[t.soil_temperature=44]="soil_temperature",t[t.surface_pressure=45]="surface_pressure",t[t.surface_temperature=46]="surface_temperature",t[t.temperature=47]="temperature",t[t.terrestrial_radiation=48]="terrestrial_radiation",t[t.terrestrial_radiation_instant=49]="terrestrial_radiation_instant",t[t.total_column_integrated_water_vapour=50]="total_column_integrated_water_vapour",t[t.updraft=51]="updraft",t[t.uv_index=52]="uv_index",t[t.uv_index_clear_sky=53]="uv_index_clear_sky",t[t.vapour_pressure_deficit=54]="vapour_pressure_deficit",t[t.visibility=55]="visibility",t[t.weather_code=56]="weather_code",t[t.wind_direction=57]="wind_direction",t[t.wind_gusts=58]="wind_gusts",t[t.wind_speed=59]="wind_speed",t[t.vertical_velocity=60]="vertical_velocity",t[t.geopotential_height=61]="geopotential_height",t[t.wet_bulb_temperature=62]="wet_bulb_temperature",t[t.river_discharge=63]="river_discharge",t[t.wave_height=64]="wave_height",t[t.wave_period=65]="wave_period",t[t.wave_direction=66]="wave_direction",t[t.wind_wave_height=67]="wind_wave_height",t[t.wind_wave_period=68]="wind_wave_period",t[t.wind_wave_peak_period=69]="wind_wave_peak_period",t[t.wind_wave_direction=70]="wind_wave_direction",t[t.swell_wave_height=71]="swell_wave_height",t[t.swell_wave_period=72]="swell_wave_period",t[t.swell_wave_peak_period=73]="swell_wave_peak_period",t[t.swell_wave_direction=74]="swell_wave_direction",t[t.pm10=75]="pm10",t[t.pm2p5=76]="pm2p5",t[t.dust=77]="dust",t[t.aerosol_optical_depth=78]="aerosol_optical_depth",t[t.carbon_monoxide=79]="carbon_monoxide",t[t.nitrogen_dioxide=80]="nitrogen_dioxide",t[t.ammonia=81]="ammonia",t[t.ozone=82]="ozone",t[t.sulphur_dioxide=83]="sulphur_dioxide",t[t.alder_pollen=84]="alder_pollen",t[t.birch_pollen=85]="birch_pollen",t[t.grass_pollen=86]="grass_pollen",t[t.mugwort_pollen=87]="mugwort_pollen",t[t.olive_pollen=88]="olive_pollen",t[t.ragweed_pollen=89]="ragweed_pollen",t[t.european_aqi=90]="european_aqi",t[t.european_aqi_pm2p5=91]="european_aqi_pm2p5",t[t.european_aqi_pm10=92]="european_aqi_pm10",t[t.european_aqi_nitrogen_dioxide=93]="european_aqi_nitrogen_dioxide",t[t.european_aqi_ozone=94]="european_aqi_ozone",t[t.european_aqi_sulphur_dioxide=95]="european_aqi_sulphur_dioxide",t[t.us_aqi=96]="us_aqi",t[t.us_aqi_pm2p5=97]="us_aqi_pm2p5",t[t.us_aqi_pm10=98]="us_aqi_pm10",t[t.us_aqi_nitrogen_dioxide=99]="us_aqi_nitrogen_dioxide",t[t.us_aqi_ozone=100]="us_aqi_ozone",t[t.us_aqi_sulphur_dioxide=101]="us_aqi_sulphur_dioxide",t[t.us_aqi_carbon_monoxide=102]="us_aqi_carbon_monoxide",t[t.sunshine_duration=103]="sunshine_duration",t[t.convective_inhibition=104]="convective_inhibition",t[t.shortwave_radiation_clear_sky=105]="shortwave_radiation_clear_sky",t[t.global_tilted_irradiance=106]="global_tilted_irradiance",t[t.global_tilted_irradiance_instant=107]="global_tilted_irradiance_instant",t[t.ocean_current_velocity=108]="ocean_current_velocity",t[t.ocean_current_direction=109]="ocean_current_direction",t[t.cloud_base=110]="cloud_base",t[t.cloud_top=111]="cloud_top",t[t.mass_density=112]="mass_density",t[t.boundary_layer_height=113]="boundary_layer_height",t[t.formaldehyde=114]="formaldehyde",t[t.glyoxal=115]="glyoxal",t[t.non_methane_volatile_organic_compounds=116]="non_methane_volatile_organic_compounds",t[t.pm10_wildfires=117]="pm10_wildfires",t[t.peroxyacyl_nitrates=118]="peroxyacyl_nitrates",t[t.secondary_inorganic_aerosol=119]="secondary_inorganic_aerosol",t[t.residential_elementary_carbon=120]="residential_elementary_carbon",t[t.total_elementary_carbon=121]="total_elementary_carbon",t[t.pm2_5_total_organic_matter=122]="pm2_5_total_organic_matter",t[t.sea_salt_aerosol=123]="sea_salt_aerosol",t[t.nitrogen_monoxide=124]="nitrogen_monoxide"})(Y||(E.Variable=Y={}));var pt=h&&h.__createBinding||(Object.create?function(t,e,s,i){i===void 0&&(i=s);var r=Object.getOwnPropertyDescriptor(e,s);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(t,i,r)}:function(t,e,s,i){i===void 0&&(i=s),t[i]=e[s]}),dt=h&&h.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),mt=h&&h.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var s in t)s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)&&pt(e,t,s);return dt(e,t),e};Object.defineProperty(T,"__esModule",{value:!0});T.VariableWithValues=void 0;const bt=mt(j),yt=P,vt=B,wt=E;class D{constructor(){this.bb=null,this.bb_pos=0}__init(e,s){return this.bb_pos=e,this.bb=s,this}static getRootAsVariableWithValues(e,s){return(s||new D).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsVariableWithValues(e,s){return e.setPosition(e.position()+bt.SIZE_PREFIX_LENGTH),(s||new D).__init(e.readInt32(e.position())+e.position(),e)}variable(){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readUint8(this.bb_pos+e):wt.Variable.undefined}unit(){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readUint8(this.bb_pos+e):vt.Unit.undefined}value(){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readFloat32(this.bb_pos+e):0}values(e){const s=this.bb.__offset(this.bb_pos,10);return s?this.bb.readFloat32(this.bb.__vector(this.bb_pos+s)+e*4):0}valuesLength(){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__vector_len(this.bb_pos+e):0}valuesArray(){const e=this.bb.__offset(this.bb_pos,10);return e?new Float32Array(this.bb.bytes().buffer,this.bb.bytes().byteOffset+this.bb.__vector(this.bb_pos+e),this.bb.__vector_len(this.bb_pos+e)):null}valuesInt64(e){const s=this.bb.__offset(this.bb_pos,12);return s?this.bb.readInt64(this.bb.__vector(this.bb_pos+s)+e*8):BigInt(0)}valuesInt64Length(){const e=this.bb.__offset(this.bb_pos,12);return e?this.bb.__vector_len(this.bb_pos+e):0}altitude(){const e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readInt16(this.bb_pos+e):0}aggregation(){const e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readUint8(this.bb_pos+e):yt.Aggregation.none}pressureLevel(){const e=this.bb.__offset(this.bb_pos,18);return e?this.bb.readInt16(this.bb_pos+e):0}depth(){const e=this.bb.__offset(this.bb_pos,20);return e?this.bb.readInt16(this.bb_pos+e):0}depthTo(){const e=this.bb.__offset(this.bb_pos,22);return e?this.bb.readInt16(this.bb_pos+e):0}ensembleMember(){const e=this.bb.__offset(this.bb_pos,24);return e?this.bb.readInt16(this.bb_pos+e):0}previousDay(){const e=this.bb.__offset(this.bb_pos,26);return e?this.bb.readInt16(this.bb_pos+e):0}}T.VariableWithValues=D;var gt=h&&h.__createBinding||(Object.create?function(t,e,s,i){i===void 0&&(i=s);var r=Object.getOwnPropertyDescriptor(e,s);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(t,i,r)}:function(t,e,s,i){i===void 0&&(i=s),t[i]=e[s]}),It=h&&h.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),xt=h&&h.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var s in t)s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)&&gt(e,t,s);return It(e,t),e};Object.defineProperty(z,"__esModule",{value:!0});z.VariablesWithTime=void 0;const St=xt(j),Dt=T;class N{constructor(){this.bb=null,this.bb_pos=0}__init(e,s){return this.bb_pos=e,this.bb=s,this}static getRootAsVariablesWithTime(e,s){return(s||new N).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsVariablesWithTime(e,s){return e.setPosition(e.position()+St.SIZE_PREFIX_LENGTH),(s||new N).__init(e.readInt32(e.position())+e.position(),e)}time(){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}timeEnd(){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}interval(){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readInt32(this.bb_pos+e):0}variables(e,s){const i=this.bb.__offset(this.bb_pos,10);return i?(s||new Dt.VariableWithValues).__init(this.bb.__indirect(this.bb.__vector(this.bb_pos+i)+e*4),this.bb):null}variablesLength(){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.__vector_len(this.bb_pos+e):0}}z.VariablesWithTime=N;var Nt=h&&h.__createBinding||(Object.create?function(t,e,s,i){i===void 0&&(i=s);var r=Object.getOwnPropertyDescriptor(e,s);(!r||("get"in r?!e.__esModule:r.writable||r.configurable))&&(r={enumerable:!0,get:function(){return e[s]}}),Object.defineProperty(t,i,r)}:function(t,e,s,i){i===void 0&&(i=s),t[i]=e[s]}),Ot=h&&h.__setModuleDefault||(Object.create?function(t,e){Object.defineProperty(t,"default",{enumerable:!0,value:e})}:function(t,e){t.default=e}),jt=h&&h.__importStar||function(t){if(t&&t.__esModule)return t;var e={};if(t!=null)for(var s in t)s!=="default"&&Object.prototype.hasOwnProperty.call(t,s)&&Nt(e,t,s);return Ot(e,t),e};Object.defineProperty(F,"__esModule",{value:!0});F.WeatherApiResponse=void 0;const Ft=jt(j),At=A,v=z;class O{constructor(){this.bb=null,this.bb_pos=0}__init(e,s){return this.bb_pos=e,this.bb=s,this}static getRootAsWeatherApiResponse(e,s){return(s||new O).__init(e.readInt32(e.position())+e.position(),e)}static getSizePrefixedRootAsWeatherApiResponse(e,s){return e.setPosition(e.position()+Ft.SIZE_PREFIX_LENGTH),(s||new O).__init(e.readInt32(e.position())+e.position(),e)}latitude(){const e=this.bb.__offset(this.bb_pos,4);return e?this.bb.readFloat32(this.bb_pos+e):0}longitude(){const e=this.bb.__offset(this.bb_pos,6);return e?this.bb.readFloat32(this.bb_pos+e):0}elevation(){const e=this.bb.__offset(this.bb_pos,8);return e?this.bb.readFloat32(this.bb_pos+e):0}generationTimeMilliseconds(){const e=this.bb.__offset(this.bb_pos,10);return e?this.bb.readFloat32(this.bb_pos+e):0}locationId(){const e=this.bb.__offset(this.bb_pos,12);return e?this.bb.readInt64(this.bb_pos+e):BigInt("0")}model(){const e=this.bb.__offset(this.bb_pos,14);return e?this.bb.readUint8(this.bb_pos+e):At.Model.undefined}utcOffsetSeconds(){const e=this.bb.__offset(this.bb_pos,16);return e?this.bb.readInt32(this.bb_pos+e):0}timezone(e){const s=this.bb.__offset(this.bb_pos,18);return s?this.bb.__string(this.bb_pos+s,e):null}timezoneAbbreviation(e){const s=this.bb.__offset(this.bb_pos,20);return s?this.bb.__string(this.bb_pos+s,e):null}current(e){const s=this.bb.__offset(this.bb_pos,22);return s?(e||new v.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}daily(e){const s=this.bb.__offset(this.bb_pos,24);return s?(e||new v.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}hourly(e){const s=this.bb.__offset(this.bb_pos,26);return s?(e||new v.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}minutely15(e){const s=this.bb.__offset(this.bb_pos,28);return s?(e||new v.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}sixHourly(e){const s=this.bb.__offset(this.bb_pos,30);return s?(e||new v.VariablesWithTime).__init(this.bb.__indirect(this.bb_pos+s),this.bb):null}}F.WeatherApiResponse=O;var Q=h&&h.__awaiter||function(t,e,s,i){function r(_){return _ instanceof s?_:new s(function(u){u(_)})}return new(s||(s=Promise))(function(_,u){function l(o){try{n(i.next(o))}catch(a){u(a)}}function c(o){try{n(i.throw(o))}catch(a){u(a)}}function n(o){o.done?_(o.value):r(o.value).then(l,c)}n((i=i.apply(t,e||[])).next())})};Object.defineProperty(L,"__esModule",{value:!0});var U=L.fetchWeatherApi=void 0;const zt=j,Tt=F,Pt=t=>new Promise(e=>setTimeout(e,t));function Bt(t){return Q(this,arguments,void 0,function*(e,s=3,i=.5,r=2){const _=[500,502,504],u=[400,429];let l=0,c=yield fetch(e);for(;_.includes(c.status);){if(l++,l>=s)throw new Error(c.statusText);const n=Math.min(i*Math.pow(2,l),r)*1e3;yield Pt(n),c=yield fetch(e)}if(u.includes(c.status)){const n=yield c.json();throw"reason"in n?new Error(n.reason):new Error(c.statusText)}return c})}function Et(t,e){return Q(this,arguments,void 0,function*(s,i,r=3,_=.2,u=2){const l=new URLSearchParams(i);l.set("format","flatbuffers");const c=yield Bt(`${s}?${l.toString()}`,r,_,u),n=new zt.ByteBuffer(new Uint8Array(yield c.arrayBuffer())),o=[];let a=0;for(;a<n.capacity();){n.setPosition(a);const f=n.readInt32(n.position());o.push(Tt.WeatherApiResponse.getSizePrefixedRootAsWeatherApiResponse(n)),a+=f+4}return o})}U=L.fetchWeatherApi=Et;function Xt(t,e){localStorage.setItem(t,JSON.stringify(e))}function J(t){const e=localStorage.getItem(t);return e?JSON.parse(e):null}const I="/Lampa",q={latitude:null,longitude:null,current:["temperature_2m","relative_humidity_2m","apparent_temperature","is_day","precipitation","rain","showers","snowfall","weather_code","cloud_cover","pressure_msl","surface_pressure","wind_speed_10m","wind_direction_10m","wind_gusts_10m"],hourly:["temperature_2m","relative_humidity_2m","dew_point_2m","apparent_temperature","precipitation_probability","precipitation","rain","showers","snowfall","snow_depth","weather_code","surface_pressure","visibility","wind_speed_10m","uv_index","uv_index_clear_sky","is_day","sunshine_duration"],daily:["weather_code","temperature_2m_max","temperature_2m_min","apparent_temperature_max","apparent_temperature_min","sunrise","sunset","daylight_duration","sunshine_duration","uv_index_max","uv_index_clear_sky_max","precipitation_sum","rain_sum","showers_sum","snowfall_sum","precipitation_hours","precipitation_probability_max","wind_speed_10m_max","wind_gusts_10m_max","wind_direction_10m_dominant"],timezone:"auto"},qt="https://api.open-meteo.com/v1/forecast",Rt="https://nominatim.openstreetmap.org/search";function Ct(t){return{latitude:t.lat,longitude:t.lon,name:t.name}}async function Lt(t){try{typeof t=="object"&&(t=t.value);const e=await fetch(Rt+`?q=${t}&format=json&limit=10`);if(!e.ok)throw new Error("Geocoding response was not ok");return await e.json()}catch(e){return console.error("Error fetching coordinates:",e),null}}async function $t(t,e){try{const s={sunrise:[],sunset:[]};for(let i=0;i<e;i++){let r=new Date;r.setDate(r.getDate()+i);const _=`${r.getFullYear()}-${r.getMonth()+1}-${r.getDate()}`,u=await fetch(`https://api.sunrise-sunset.org/json?lat=${t.latitude}&lng=${t.longitude}&date=${_}&tzid=${t.timezone}`);if(!u.ok)throw new Error("Sunrise-sunset response was not ok");const l=await u.json();s.sunrise.push(l.results.sunrise),s.sunset.push(l.results.sunset)}return s}catch(s){console.error("Error fetching sunrise-sunset data:",s)}}async function kt(t){try{t&&(q.latitude=t.latitude,q.longitude=t.longitude);const e=(b,M,W)=>Array.from({length:(M-b)/W},(Ht,V)=>b+V*W),i=(await U(qt,q))[0],r=i.utcOffsetSeconds(),_=i.timezone();t.timezone=_;const u=i.timezoneAbbreviation(),l=i.latitude(),c=i.longitude(),n=i.current(),o=i.hourly(),a=i.daily(),f={general:{cityName:t.name,timezone:_},current:{time:new Date((Number(n.time())+r)*1e3),temperature2m:n.variables(0).value(),relativeHumidity2m:n.variables(1).value(),apparentTemperature:n.variables(2).value(),isDay:n.variables(3).value(),precipitation:n.variables(4).value(),rain:n.variables(5).value(),showers:n.variables(6).value(),snowfall:n.variables(7).value(),weatherCode:n.variables(8).value(),cloudCover:n.variables(9).value(),pressureMsl:n.variables(10).value(),surfacePressure:n.variables(11).value(),windSpeed10m:n.variables(12).value(),windDirection10m:n.variables(13).value(),windGusts10m:n.variables(14).value()},hourly:{time:e(Number(o.time()),Number(o.timeEnd()),o.interval()).map(b=>new Date((b+r)*1e3)),temperature2m:o.variables(0).valuesArray(),relativeHumidity2m:o.variables(1).valuesArray(),dewPoint2m:o.variables(2).valuesArray(),apparentTemperature:o.variables(3).valuesArray(),precipitationProbability:o.variables(4).valuesArray(),precipitation:o.variables(5).valuesArray(),rain:o.variables(6).valuesArray(),showers:o.variables(7).valuesArray(),snowfall:o.variables(8).valuesArray(),snowDepth:o.variables(9).valuesArray(),weatherCode:o.variables(10).valuesArray(),surfacePressure:o.variables(11).valuesArray(),visibility:o.variables(12).valuesArray(),windSpeed10m:o.variables(13).valuesArray(),uvIndex:o.variables(14).valuesArray(),uvIndexClearSky:o.variables(15).valuesArray(),isDay:o.variables(16).valuesArray(),sunshineDuration:o.variables(17).valuesArray()},daily:{time:e(Number(a.time()),Number(a.timeEnd()),a.interval()).map(b=>new Date((b+r)*1e3)),weatherCode:a.variables(0).valuesArray(),temperature2mMax:a.variables(1).valuesArray(),temperature2mMin:a.variables(2).valuesArray(),apparentTemperatureMax:a.variables(3).valuesArray(),apparentTemperatureMin:a.variables(4).valuesArray(),sunrise:[],sunset:[],daylightDuration:a.variables(7).valuesArray(),sunshineDuration:a.variables(8).valuesArray(),uvIndexMax:a.variables(9).valuesArray(),uvIndexClearSkyMax:a.variables(10).valuesArray(),precipitationSum:a.variables(11).valuesArray(),rainSum:a.variables(12).valuesArray(),showersSum:a.variables(13).valuesArray(),snowfallSum:a.variables(14).valuesArray(),precipitationHours:a.variables(15).valuesArray(),precipitationProbabilityMax:a.variables(16).valuesArray(),windSpeed10mMax:a.variables(17).valuesArray(),windGusts10mMax:a.variables(18).valuesArray(),windDirection10mDominant:a.variables(19).valuesArray()}},k=await $t(t,2);return f.daily.sunrise=k.sunrise,f.daily.sunset=k.sunset,f}catch(e){console.error("Error fetching weather data:",e)}}const Yt=_t("weather",()=>{const t=y(""),e=y({latitude:0,longitude:0,name:""});y({sunrise:[],sunset:[]});const s=y(null),i=y({0:{name:"Clear sky",iconDay:"clear-day",iconNight:"clear-night"},1:{name:"Mainly clear",iconDay:"clear-day",iconNight:"clear-night"},2:{name:"Partly cloudy",iconDay:"partly-cloudy-day",iconNight:"partly-cloudy-night"},3:{name:"Overcast",iconDay:"overcast-day",iconNight:"overcast-night"},45:{name:"Fog",iconDay:"fog-day",iconNight:"fog-night"},48:{name:"Depositing rime fog",iconDay:"partly-cloudy-day",iconNight:"partly-cloudy-night"},51:{name:"Light drizzle",iconDay:"partly-cloudy-day-drizzle",iconNight:"partly-cloudy-night-drizzle"},53:{name:"Moderate drizzle",iconDay:"partly-cloudy-day-drizzle",iconNight:"partly-cloudy-night-drizzle"},55:{name:"Dense drizzle",iconDay:"partly-cloudy-day-drizzle",iconNight:"partly-cloudy-night-drizzle"},56:{name:"Freezing light drizzle",iconDay:"partly-cloudy-day-drizzle",iconNight:"partly-cloudy-night-drizzle"},57:{name:"Freezing light drizzle",iconDay:"partly-cloudy-day-drizzle",iconNight:"partly-cloudy-night-drizzle"},61:{name:"Slight rain",iconDay:"partly-cloudy-day-rain",iconNight:"partly-cloudy-night-rain"},63:{name:"Moderate rain",iconDay:"partly-cloudy-day-rain",iconNight:"partly-cloudy-night-rain"},65:{name:"Heavy rain",iconDay:"partly-cloudy-day-rain",iconNight:"partly-cloudy-night-rain"},66:{name:"Freezing light rain",iconDay:"partly-cloudy-day-sleet",iconNight:"partly-cloudy-night-sleet"},67:{name:"Freezing heavy rain",iconDay:"partly-cloudy-day-sleet",iconNight:"partly-cloudy-night-sleet"},71:{name:"Light snow fall",iconDay:"partly-cloudy-day-snow",iconNight:"partly-cloudy-night-snow"},73:{name:"Moderate snow fall",iconDay:"partly-cloudy-day-snow",iconNight:"partly-cloudy-night-snow"},75:{name:"Heavy snow fall",iconDay:"partly-cloudy-day-snow",iconNight:"partly-cloudy-night-snow"},77:{name:"Snow grains",iconDay:"partly-cloudy-day-snow",iconNight:"partly-cloudy-night-snow"},80:{name:"Light showers",iconDay:"partly-cloudy-day-rain",iconNight:"partly-cloudy-night-rain"},81:{name:"Moderate showers",iconDay:"partly-cloudy-day-rain",iconNight:"partly-cloudy-night-rain"},82:{name:"Violent showers",iconDay:"partly-cloudy-day-rain",iconNight:"partly-cloudy-night-rain"},85:{name:"Slight snow showers",iconDay:"partly-cloudy-day-snow",iconNight:"partly-cloudy-night-snow"},86:{name:"Heavy snow showers",iconDay:"partly-cloudy-day-snow",iconNight:"partly-cloudy-night-snow"},95:{name:"Thunderstorm",iconDay:"thunderstorms-day",iconNight:"thunderstorms-night"},96:{name:"Thunderstorm with slight hail",iconDay:"thunderstorms-day",iconNight:"thunderstorms-night"},99:{name:"Thunderstorm with heavy hail",iconDay:"thunderstorms-day",iconNight:"thunderstorms-night"}});function r(c=0,n="current"){if(!s.value)return console.error("weatherData is null"),null;let o=s.value.current;if(n==="hourly"){o=s.value.hourly;const f=o.isDay[c]?i.value[o.weatherCode[c]].iconDay:i.value[o.weatherCode[c]].iconNight;return`${I}/weather-icons/${f}.svg`}else if(n==="daily"){o=s.value.daily;const f=i.value[o.weatherCode[c]].iconDay;return`${I}/weather-icons/${f}.svg`}else if(n==="current"){o=s.value.current;const f=s.value.current.isDay?i.value[o.weatherCode].iconDay:i.value[o.weatherCode].iconNight;return`${I}/weather-icons/${f}.svg`}const a=s.value.current.isDay?i.value[o.weatherCode[c]].iconDay:i.value[o.weatherCode[c]].iconNight;return`${I}/weather-icons/${a}.svg`}function _(c=0,n){if(!s.value)return console.error("weatherData is null"),null;if(n==="hourly")return i.value[s.value.hourly.weatherCode[c]].name;if(n==="daily")return i.value[s.value.daily.weatherCode[c]].name;if(n==="current")return i.value[s.value.current.weatherCode].name}async function u(){if(e.value)t.value=e.name;else return;s.value=await kt(e.value)}function l(){t.value=J("cityName"),e.value=J("location")}return ct(()=>{l(),e.value||(e.value={latitude:null,longitude:null,name:""}),t.value||(t.value=""),u()}),{cityName:t,location:e,updateWeatherData:u,getIconPath:r,getWeatherDescription:_,fetchGeocodingData:Lt,getCityLocation:Ct,loadCityFromStorage:l,weatherData:s,weatherIcons:i}});export{Zt as _,ut as a,J as l,Xt as s,Yt as u};
