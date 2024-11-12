const plugin = require("tailwindcss/plugin");


const emuikitPlugin =plugin(function({addComponents,theme}){
      addComponents({
      '.btn': {
        display: 'inline-flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontWeight: 'medium',
        padding: `${theme('spacing.2')} ${theme('spacing.4')}`,
        borderRadius: theme('borderRadius.md'),
        fontSize: theme('fontSize.base'),
        transition: 'background-color 0.2s, border-color 0.2s, color 0.2s',
        cursor: 'pointer',
        '&:disabled': {
          backgroundColor: theme('colors.gray.200'),
          color: theme('colors.gray.400'),
          cursor: 'not-allowed',
        },
      },

      '.btnPrimary': {
        backgroundColor: theme('colors.blue.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.blue.600'),
        },
      },
      '.btnSecondary': {
        backgroundColor: theme('colors.gray.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.gray.600'),
        },
      },
      '.btnAccent': {
        backgroundColor: theme('colors.purple.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.purple.600'),
        },
      },
      '.btnInfo': {
        backgroundColor: theme('colors.blue.300'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.blue.400'),
        },
      },
      '.btnSuccess': {
        backgroundColor: theme('colors.green.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.green.600'),
        },
      },
      '.btnWarning': {
        backgroundColor: theme('colors.yellow.500'),
        color: theme('colors.black'),
        '&:hover': {
          backgroundColor: theme('colors.yellow.600'),
        },
      },
      '.btnError': {
        backgroundColor: theme('colors.red.500'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.red.600'),
        },
      },
      '.btnNeutral': {
        backgroundColor: theme('colors.gray.800'),
        color: theme('colors.white'),
        '&:hover': {
          backgroundColor: theme('colors.gray.900'),
        },
      },


      '.btnOutline': {
        backgroundColor: 'transparent',
        borderWidth: '1px',
        '&.btnPrimary': {
          color: theme('colors.blue.500'),
          borderColor: theme('colors.blue.500'),
          '&:hover': {
            backgroundColor: theme('colors.blue.50'),
          },
        },
        '&.btnSecondary': {
          color: theme('colors.gray.500'),
          borderColor: theme('colors.gray.500'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100'),
          },
        },
        '&.btnAccent': {
          color: theme('colors.purple.500'),
          borderColor: theme('colors.purple.500'),
          '&:hover': {
            backgroundColor: theme('colors.purple.50'),
          },
        },
        '&.btnInfo': {
          color: theme('colors.blue.300'),
          borderColor: theme('colors.blue.300'),
          '&:hover': {
            backgroundColor: theme('colors.blue.50'),
          },
        },
        '&.btnSuccess': {
          color: theme('colors.green.500'),
          borderColor: theme('colors.green.500'),
          '&:hover': {
            backgroundColor: theme('colors.green.50'),
          },
        },
        '&.btnWarning': {
          color: theme('colors.yellow.500'),
          borderColor: theme('colors.yellow.500'),
          '&:hover': {
            backgroundColor: theme('colors.yellow.50'),
          },
        },
        '&.btnError': {
          color: theme('colors.red.500'),
          borderColor: theme('colors.red.500'),
          '&:hover': {
            backgroundColor: theme('colors.red.50'),
          },
        },
        '&.btnNeutral': {
          color: theme('colors.gray.800'),
          borderColor: theme('colors.gray.800'),
          '&:hover': {
            backgroundColor: theme('colors.gray.100'),
          },
        },
      },

      '.btnGhost': {
        backgroundColor: 'transparent',
        color: theme('colors.gray.500'),
        '&:hover': {
          backgroundColor: theme('colors.gray.100'),
        },
      },
      '.btnLink': {
        backgroundColor: 'transparent',
        color: theme('colors.blue.500'),
        '&:hover': {
          color: theme('colors.blue.700'),
        },
      },

      '.btnXS': {
          padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
          fontSize: theme('fontSize.xs'),
        },
        '.btnSM': {
          padding: `${theme('spacing.1')} ${theme('spacing.3')}`,
          fontSize: theme('fontSize.sm'),
        },
        '.btnLG': {
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          fontSize: theme('fontSize.lg'),
        },

        '.btnFull': {
          width: '100%',
          display: 'inline-flex', 
          alignItems: 'center',    
          justifyContent: 'center',
        },
      });
      addComponents({
        '.input': {
          width: '100%',
          padding: `${theme('spacing.2')} ${theme('spacing.3')}`,
          borderRadius: theme('borderRadius.md'),
          border: `1px solid ${theme('colors.gray.300')}`,
          backgroundColor: theme('colors.white'),
          fontSize: theme('fontSize.base'),
          color: theme('colors.gray.700'),
          transition: 'border-color 0.2s, box-shadow 0.2s',
          outline: 'none',

          '&:focus': {
            borderColor: theme('colors.blue.500'),
            boxShadow: `0 0 0 2px ${theme('colors.blue.200')}`,
          },

          '&:disabled': {
            backgroundColor: theme('colors.gray.100'),
            color: theme('colors.gray.500'),
            cursor: 'not-allowed',
          },

          '&.inputError': {
            borderColor: theme('colors.red.500'),
            backgroundColor: theme('colors.red.50'),
            '&:focus': {
              borderColor: theme('colors.red.600'),
              boxShadow: `0 0 0 2px ${theme('colors.red.200')}`,
            },
          },

          '&.inputSuccess': {
            borderColor: theme('colors.green.500'),
            backgroundColor: theme('colors.green.50'),
            '&:focus': {
              borderColor: theme('colors.green.600'),
              boxShadow: `0 0 0 2px ${theme('colors.green.200')}`,
            },
          },
        },

        '.inputSm': {
          padding: `${theme('spacing.1')} ${theme('spacing.2')}`,
          fontSize: theme('fontSize.sm'),
        },

        '.inputLg': {
          padding: `${theme('spacing.3')} ${theme('spacing.4')}`,
          fontSize: theme('fontSize.lg'),
        },
      });
      addComponents({
        '.card': {
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.lg'),
          backgroundColor: theme('colors.white'),
        },
        '.cardImage': {
          width: '100%',
          height: '12rem',
          objectFit: 'cover',
        },
        '.cardBody': {
          padding: theme('spacing.4'),
        },
        '.cardTitle': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
          color: theme('colors.gray.800'),
        },
        '.cardDescription': {
          color: theme('colors.gray.600'),
          marginTop: theme('spacing.2'),
        },
        '.cardActions': {
          marginTop: theme('spacing.4'),
          display: 'flex',
          justifyContent: 'space-between',
        },
      });
      addComponents({
        '.productCardStandard': {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.white'),
          boxShadow: theme('boxShadow.lg'),
          overflow: 'hidden',
        },
        '.productCardStandardImg': {
          width: '100%',
          height: '12rem',
          objectFit: 'cover',
        },
        '.productCardStandardContent': {
          padding: theme('spacing.4'),
        },
        '.productCardStandardProductName': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.productCardStandardDescription': {
          color: theme('colors.gray.500'),
          marginBottom: theme('spacing.4'),
        },
        '.productCardStandardPrice': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.indigo.600'),
        },
      });
      addComponents({
        '.productCardElevated': {
          borderRadius: '1.5rem',
          backgroundColor: theme('colors.white'),
          boxShadow: theme('boxShadow.xl'),
          overflow: 'hidden',
        },
        '.productCardElevatedImg': {
          width: '100%',
          height: '12rem',
          objectFit: 'cover',
        },
        '.productCardElevatedDetails': {
          padding: theme('spacing.4'),
        },
        '.productCardElevatedH3': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.productCardElevatedP': {
          color: theme('colors.gray.500'),
          marginBottom: theme('spacing.4'),
        },
        '.productCardElevatedPrice': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.indigo.600'),
        },
        '.productCardElevatedFull': {
          width: '100%',
        },
      });
      addComponents({
        '.productCardModern': {
          borderRadius: '0.5rem',
          backgroundColor: theme('colors.white'),
          boxShadow: theme('boxShadow.lg'),
          overflow: 'hidden',
        },
        '.productCardModernImg': {
          width: '100%',
          height: '12rem',
          objectFit: 'cover',
        },
        '.productCardModernDetails': {
          padding: theme('spacing.4'),
        },
        '.productCardModernH3': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
        '.productCardModernP': {
          color: theme('colors.gray.500'),
          marginBottom: theme('spacing.4'),
        },
        '.productCardModernButtonGroup': {
          display: 'flex',
          gap: theme('spacing.3'),
          marginBottom: theme('spacing.4'),
        },
        '.productCardModernPrice': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
          color: theme('colors.indigo.600'),
        },
      });
      addComponents({
        '.productCardBasic': {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.white'),
          boxShadow: theme('boxShadow.lg'),
          overflow: 'hidden',
          '.productCardImg': {
            width: '100%',
            height: '12rem',
            objectFit: 'cover',
          },
          '.productCardContent': {
            padding: theme('spacing.4'),
          },
          '.productCardTitle': {
            fontSize: theme('fontSize.xl'),
            fontWeight: theme('fontWeight.semibold'),
          },
          '.productCardDescription': {
            color: theme('colors.gray.500'),
            marginBottom: theme('spacing.2'),
          },
          '.productCardPriceWrapper': {
            display: 'flex',
            alignItems: 'center',
            marginBottom: theme('spacing.4'),
            '&Span': {
              fontSize: theme('fontSize.lg'),
              fontWeight: theme('fontWeight.bold'),
            },
          },
          '.productCardPriceOld': {
            color: theme('colors.red.500'),
            textDecoration: 'line-through',
          },
          '.productCardPriceNew': {
            color: theme('colors.indigo.600'),
          },
        },
      });
      addComponents({
        '.productCardRotating': {
          borderRadius: theme('borderRadius.xl'),
          backgroundColor: theme('colors.white'),
          boxShadow: theme('boxShadow.lg'),
          overflow: 'hidden',
          transform: 'scale(1)',
          transition: 'transform 0.3s, rotate 0.3s',
          '&:hover': {
            transform: 'scale(1.1)',
            rotate: '3deg',
          },
          '.productCardImg': {
            width: '100%',
            height: '12rem',
            objectFit: 'cover',
          },
          '.productCardContent': {
            padding: theme('spacing.6'),
          },
          '.productCardTitle': {
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.gray.800'),
          },
          '.productCardDescription': {
            fontSize: theme('fontSize.sm'),
            color: theme('colors.gray.500'),
            marginBottom: theme('spacing.4'),
          },
          '.productCardPrice': {
            fontSize: theme('fontSize.lg'),
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.indigo.600'),
          },
        },
      });
      addComponents({
        '.productCardClassic': {
          borderRadius: theme('borderRadius.xl'),
          backgroundColor: theme('colors.white'),
          boxShadow: theme('boxShadow.2xl'),
          overflow: 'hidden',
          transform: 'scale(1)',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          '.productCardImageWrapper': {
            position: 'relative',
          },
          '.productCardImage': {
            width: '100%',
            height: '14rem',
            objectFit: 'cover',
            objectPosition: 'center',
          },
          '.productCardOverlay': {
            position: 'absolute',
            bottom: 0,
            left: 0,
            background: 'linear-gradient(to top, rgba(0, 0, 0, 1), rgba(0, 0, 0, 0))',
            padding: theme('spacing.4'),
            width: '100%',
          },
          '.productCardHeading': {
            fontSize: theme('fontSize.xl'),
            fontWeight: theme('fontWeight.semibold'),
            color: theme('colors.white'),
          },
          '.productCardText': {
            fontSize: theme('fontSize.sm'),
            color: theme('colors.gray.200'),
          },
          '.productCardActionWrapper': {
            padding: theme('spacing.4'),
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          '.productCardCost': {
            fontSize: theme('fontSize.lg'),
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.indigo.600'),
          },
        },
      
        '.productCardRotatingEffect': {
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.gray.800'),
          boxShadow: theme('boxShadow.lg'),
          overflow: 'hidden',
          transform: 'rotate(0deg)',
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'rotate(6deg)',
          },
          '.productCardImageWrapper': {
            position: 'relative',
          },
          '.productCardImage': {
            width: '100%',
            height: '12rem',
            objectFit: 'cover',
          },
          '.productCardDescriptionOverlay': {
            position: 'absolute',
            bottom: 0,
            left: 0,
            right: 0,
            backgroundColor: 'rgba(0, 0, 0, 0.5)',
            padding: theme('spacing.4'),
          },
          '.productCardTitle': {
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.white'),
          },
          '.productCardDescription': {
            fontSize: theme('fontSize.sm'),
            color: theme('colors.gray.300'),
          },
          '.productCardActionWrapper': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            padding: theme('spacing.4'),
          },
          '.productCardPrice': {
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.semibold'),
            color: theme('colors.indigo.500'),
          },
        },
      
        '.productCardGradient': {
          borderRadius: theme('borderRadius.lg'),
          background: 'linear-gradient(to right, #fbbf24, #f472b6)',
          boxShadow: theme('boxShadow.lg'),
          overflow: 'hidden',
          transform: 'scale(1)',
          transition: 'transform 0.3s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
          '.productCardImage': {
            width: '100%',
            height: '14rem',
            objectFit: 'cover',
          },
          '.productCardDetails': {
            padding: theme('spacing.4'),
          },
          '.productCardTitle': {
            fontSize: theme('fontSize.2xl'),
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.white'),
          },
          '.productCardText': {
            fontSize: theme('fontSize.sm'),
            color: theme('colors.white'),
            marginBottom: theme('spacing.2'),
          },
          '.productCardPriceWrapper': {
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          },
          '.productCardPrice': {
            fontSize: theme('fontSize.lg'),
            fontWeight: theme('fontWeight.bold'),
            color: theme('colors.white'),
          },
        },
      }); 
      addComponents({
        '.customCardGradient': {
          borderRadius: theme('borderRadius.2xl'),
          background: 'linear-gradient(to right, #EC4899, #8B5CF6)', 
          boxShadow: theme('boxShadow.lg'),
          overflow: 'hidden',
          transform: 'scale(1)',
          transition: 'transform 0.5s',
          '&:hover': {
            transform: 'scale(1.05)',
          },
        },
        '.customCardImage': {
          width: '100%',
          height: '12rem',
          objectFit: 'cover',
          borderTopLeftRadius: theme('borderRadius.2xl'),
          borderTopRightRadius: theme('borderRadius.2xl'),
        },
        '.customCardContent': {
          padding: theme('spacing.6'),
          color: theme('colors.white'),
        },
        '.customCardTitle': {
          fontSize: theme('fontSize.2xl'),
          fontWeight: theme('fontWeight.bold'),
        },
        '.customCardDescription': {
          fontSize: theme('fontSize.sm'),
          marginBottom: theme('spacing.4'),
        },
        '.customCardPriceWrapper': {
          display: 'flex',
          justifyContent: 'space-between',
          alignItems: 'center',
        },
        '.customCardPrice': {
          fontSize: theme('fontSize.xl'),
          fontWeight: theme('fontWeight.semibold'),
        },
      });
      addComponents({
        '.custom-breadcrumb': {
          '@apply text-gray-700': {},
        },
        '.custom-breadcrumb-list': {
          '@apply list-none p-0 flex': {},
        },
        '.custom-breadcrumb-link': {
          '@apply hover:text-indigo-600': {},
        },
        '.custom-breadcrumb-separator': {
          '@apply mx-2': {},
        },
        '.custom-breadcrumb-active': {
          '@apply font-bold text-indigo-600': {},
        },
      })
      addComponents({
        '.custom-pagination': {
          '@apply flex justify-center items-center space-x-4 py-4': {},
        },
        '.custom-pagination-button': {
          '@apply px-4 py-2 rounded-lg transition duration-300': {},
        },
        '.custom-pagination-prev': {
          '@apply bg-indigo-500 text-white hover:bg-indigo-600': {},
        },
        '.custom-pagination-next': {
          '@apply bg-indigo-500 text-white hover:bg-indigo-600': {},
        },
        '.custom-pagination-number': {
          '@apply bg-gray-200 text-gray-700 hover:bg-gray-300 rounded-lg': {},
        },
        '.custom-pagination-current': {
          '@apply bg-indigo-600 text-white rounded-lg': {},
        },
        '.custom-pagination-ellipsis': {
          '@apply text-lg text-gray-700': {},
        },
      });
      addComponents({
        '.blog-card-one': {
          borderRadius: '0.5rem',
          boxShadow: '0 4px 6px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
        },
        '.blog-card-one img': {
          width: '100%',
          height: '12rem', 
          objectFit: 'cover',
        },
        '.blog-card-one .content': {
          padding: '1.5rem', 
        },
        '.blog-card-one h2': {
          fontSize: '1.5rem', 
          fontWeight: '600', 
          color: '#2D3748',
          marginBottom: '0.5rem', 
        },
        '.blog-card-one p': {
          color: '#718096', 
          fontSize: '1rem',
          marginBottom: '1rem',
        },
        '.blog-card-one .info': {
          display: 'flex',
          justifyContent: 'space-between',
          fontSize: '0.875rem', 
          color: '#A0AEC0', 
        },
        '.blog-card-one .info span': {
          display: 'inline-block',
        },
      });
      addComponents({
        '.blog-card-two': {
          borderRadius: '0.5rem',
          overflow: 'hidden',
          boxShadow: '0 10px 15px rgba(0, 0, 0, 0.1)',
          backgroundColor: 'white',
        },
        '.blog-card-two img': {
          width: '100%',
          height: '12rem', 
          objectFit: 'cover',
        },
        '.blog-card-two .content': {
          padding: '1.5rem',
        },
        '.blog-card-two h2': {
          fontSize: '1.875rem',
          fontWeight: '700',
          color: '#111827', 
          marginBottom: '0.75rem', 
          transition: 'color 0.3s',
        },
        '.blog-card-two h2:hover': {
          color: '#3B82F6', 
        },
        '.blog-card-two p': {
          color: '#4B5563', 
          fontSize: '1.125rem',
          marginBottom: '1rem',
          lineHeight: '1.625'
        },
        '.blog-card-two .info': {
          display: 'flex',
          alignItems: 'center',
          spaceBetween: '4px',
          fontSize: '0.875rem',
          color: '#6B7280', 
        },
        '.blog-card-two .info span': {
          display: 'inline-flex',
          alignItems: 'center',
        },
        '.blog-card-two .info svg': {
          width: '1rem', 
          height: '1rem', 
          marginRight: '0.25rem',
          color: '#6B7280', 
        },
        '.blog-card-two .cta': {
          padding: '1.5rem', 
          paddingTop: '0',
        },
        '.blog-card-two .cta a': {
          display: 'block',
          textAlign: 'center',
          padding: '0.5rem 1rem', 
          backgroundColor: '#3B82F6',
          color: 'white',
          borderRadius: '0.375rem',
          transition: 'background-color 0.3s',
        },
        '.blog-card-two .cta a:hover': {
          backgroundColor: '#2563EB', 
        },
      });     
      addComponents({
        '.blog-card-three': {
          borderRadius: theme('borderRadius.lg'),
          overflow: 'hidden',
          boxShadow: theme('boxShadow.2xl'), 
          backgroundImage: `linear-gradient(to right, ${theme('colors.blue.500')}, ${theme('colors.indigo.600')})`,
        },
        '.blog-card-three img': {
          width: '100%',
          height: theme('spacing.56'), 
          objectFit: 'cover',
        },
        '.blog-card-three .content': {
          padding: theme('spacing.6'), 
          color: theme('colors.white'), 
        },
        '.blog-card-three h2': {
          fontSize: theme('fontSize.4xl'), 
          fontWeight: theme('fontWeight.extrabold'), 
          marginBottom: theme('spacing.3'), 
          transition: 'color 0.3s',
        },
        '.blog-card-three h2:hover': {
          color: theme('colors.yellow.300'),
        },
        '.blog-card-three p': {
          fontSize: theme('fontSize.lg'),
          color: theme('colors.gray.200'),
          marginBottom: theme('spacing.4'),
          lineHeight: theme('lineHeight.relaxed'),
        },
        '.blog-card-three .info': {
          display: 'flex',
          alignItems: 'center',
          marginRight: theme('spacing.6'),
          fontSize: theme('fontSize.sm'),
          color: theme('colors.gray.300'), 
        },
        '.blog-card-three .info span': {
          display: 'inline-flex',
          alignItems: 'center',
        },
        '.blog-card-three .info svg': {
          width: theme('spacing.4'),
          height: theme('spacing.4'),
          marginRight: theme('spacing.1'), 
          color: theme('colors.gray.300'),
        },
        '.blog-card-three .cta': {
          padding: theme('spacing.6'),
          paddingTop: '0',
        },
        '.blog-card-three .cta a': {
          display: 'block',
          textAlign: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`, 
          backgroundColor: theme('colors.white'), 
          color: theme('colors.blue.600'),
          borderRadius: theme('borderRadius.lg'), 
          boxShadow: theme('boxShadow.md'), 
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.blog-card-three .cta a:hover': {
          backgroundColor: theme('colors.gray.100'),
          transform: 'scale(1.05)',
        },
      });
      addComponents({
        '.blog-card-four': {
          borderRadius: theme('borderRadius.lg'), 
          overflow: 'hidden',
          boxShadow: theme('boxShadow.lg'),
          backgroundColor: theme('colors.white'),
          transition: 'background-color 0.5s ease-in-out, transform 0.5s ease-in-out',
          '&:hover': {
            backgroundImage: `linear-gradient(to right, ${theme('colors.teal.500')}, ${theme('colors.purple.600')})`,
            transform: 'scale(1.05)', 
          },
        },
        '.blog-card-four img': {
          width: '100%',
          height: theme('spacing.56'), 
          objectFit: 'cover',
          transition: 'opacity 0.5s', 
        },
        '.blog-card-four:hover img': {
          opacity: 0.75,
        },
        '.blog-card-four .content': {
          padding: theme('spacing.6'), 
          color: theme('colors.gray.800'), 
          transition: 'color 0.3s',
        },
        '.blog-card-four:hover .content': {
          color: theme('colors.white'), 
        },
        '.blog-card-four h2': {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
          marginBottom: theme('spacing.3'),
          transition: 'color 0.3s', 
        },
        '.blog-card-four:hover h2': {
          color: theme('colors.yellow.300'),
        },
        '.blog-card-four p': {
          fontSize: theme('fontSize.lg'),
          marginBottom: theme('spacing.4'), 
          lineHeight: theme('lineHeight.relaxed'), 
          transition: 'color 0.3s', 
        },
        '.blog-card-four:hover p': {
          color: theme('colors.gray.200'), 
        },
        '.blog-card-four .info': {
          display: 'flex',
          alignItems: 'center',
          marginRight: theme('spacing.6'), 
          fontSize: theme('fontSize.sm'), 
        },
        '.blog-card-four .info span': {
          display: 'inline-flex',
          alignItems: 'center',
        },
        '.blog-card-four .info svg': {
          width: theme('spacing.4'), 
          height: theme('spacing.4'),
          marginRight: theme('spacing.1'),
          color: theme('colors.gray.500'),
          transition: 'color 0.3s', 
        },
        '.blog-card-four:hover .info svg': {
          color: theme('colors.gray.200'), 
        },
        '.blog-card-four .cta': {
          padding: theme('spacing.6'),
          paddingTop: '0',
        },
        '.blog-card-four .cta a': {
          display: 'block',
          textAlign: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`, 
          backgroundColor: theme('colors.white'), 
          color: theme('colors.teal.600'), 
          borderRadius: theme('borderRadius.lg'), 
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s', 
        },
        '.blog-card-four:hover .cta a': {
          backgroundColor: theme('colors.teal.700'), 
          color: theme('colors.white'),
          transform: 'scale(1.05)', 
        },
      });
      addComponents({
        '.blog-card-five': {
          borderRadius: theme('borderRadius.lg'), 
          overflow: 'hidden',
          boxShadow: theme('boxShadow.2xl'),
          backgroundColor: theme('colors.white'),
          transition: 'background-color 0.5s ease-in-out, transform 0.5s ease-in-out',
          '&:hover': {
            backgroundImage: `linear-gradient(to left, ${theme('colors.yellow.400')}, ${theme('colors.pink.500')})`,
            transform: 'scale(1.05)',
          },
        },
        '.blog-card-five img': {
          width: '100%',
          height: theme('spacing.56'), 
          objectFit: 'cover',
          transition: 'filter 0.3s',
        },
        '.blog-card-five:hover img': {
          filter: 'blur(4px)',
        },
        '.blog-card-five .content': {
          padding: theme('spacing.6'),
          color: theme('colors.gray.800'),
          transition: 'color 0.3s',
        },
        '.blog-card-five:hover .content': {
          color: theme('colors.white'),
        },
        '.blog-card-five h2': {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
          marginBottom: theme('spacing.3'),
          transition: 'color 0.3s',
        },
        '.blog-card-five:hover h2': {
          color: theme('colors.pink.100'),
        },
        '.blog-card-five p': {
          fontSize: theme('fontSize.lg'),
          marginBottom: theme('spacing.4'),
          lineHeight: theme('lineHeight.relaxed'),
          transition: 'color 0.3s',
        },
        '.blog-card-five:hover p': {
          color: theme('colors.gray.200'),
        },
        '.blog-card-five .info': {
          display: 'flex',
          alignItems: 'center',
          marginRight: theme('spacing.6'),
          fontSize: theme('fontSize.sm'),
        },
        '.blog-card-five .info span': {
          display: 'inline-flex',
          alignItems: 'center',
        },
        '.blog-card-five .info svg': {
          width: theme('spacing.4'),
          height: theme('spacing.4'),
          marginRight: theme('spacing.1'),
          color: theme('colors.gray.500'),
          transition: 'color 0.3s',
        },
        '.blog-card-five:hover .info svg': {
          color: theme('colors.gray.200'),
        },
        '.blog-card-five .cta': {
          padding: theme('spacing.6'),
          paddingTop: '0',
        },
        '.blog-card-five .cta a': {
          display: 'block',
          textAlign: 'center',
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          backgroundColor: theme('colors.pink.500'),
          color: theme('colors.white'),
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.lg'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.blog-card-five:hover .cta a': {
          backgroundColor: theme('colors.pink.600'),
          transform: 'scale(1.05)',
        },
      });
      addComponents({
        '.blog-card-six': {
          borderRadius: theme('borderRadius.lg'),
          overflow: 'hidden',
          backgroundColor: theme('colors.white'),
          boxShadow: theme('boxShadow.xl'),
          transition: 'transform 0.5s ease-in-out, background-color 0.3s ease-in-out',
          '&:hover': {
            transform: 'rotate(3deg) scale(1.05)',
          },
        },
        '.blog-card-six img': {
          width: '100%',
          height: theme('spacing.56'),
          objectFit: 'cover',
          transition: 'opacity 0.3s',
        },
        '.blog-card-six:hover img': {
          opacity: 0.75,
        },
        '.blog-card-six .content': {
          padding: theme('spacing.6'),
          color: theme('colors.gray.800'),
          transition: 'color 0.3s',
        },
        '.blog-card-six:hover .content': {
          color: theme('colors.white'),
        },
        '.blog-card-six h2': {
          fontSize: theme('fontSize.3xl'),
          fontWeight: theme('fontWeight.bold'),
          marginBottom: theme('spacing.3'),
          transition: 'color 0.3s',
        },
        '.blog-card-six:hover h2': {
          color: theme('colors.yellow.400'),
        },
        '.blog-card-six p': {
          fontSize: theme('fontSize.lg'),
          marginBottom: theme('spacing.4'),
          lineHeight: theme('lineHeight.relaxed'),
          transition: 'color 0.3s',
        },
        '.blog-card-six:hover p': {
          color: theme('colors.gray.200'),
        },
        '.blog-card-six .info': {
          display: 'flex',
          alignItems: 'center',
          spaceX: theme('spacing.6'),
          fontSize: theme('fontSize.sm'),
          color: theme('colors.gray.500'),
          transition: 'color 0.3s',
        },
        '.blog-card-six:hover .info': {
          color: theme('colors.gray.200'),
        },
        '.blog-card-six a': {
          display: 'block',
          textAlign: 'center',
          backgroundColor: theme('colors.white'),
          color: theme('colors.teal.600'),
          padding: `${theme('spacing.3')} ${theme('spacing.6')}`,
          borderRadius: theme('borderRadius.lg'),
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.blog-card-six:hover a': {
          backgroundColor: theme('colors.teal.700'),
          color: theme('colors.white'),
          transform: 'scale(1.1) rotate(2deg)',
        },
      });
      addComponents({
        '.alert-success-one': {
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.green.100'),
          color: theme('colors.green.800'),
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.alert-success-one:hover': {
          backgroundColor: theme('colors.green.200'),
        },
        '.alert-success-one .alert-title': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
          marginBottom: theme('spacing.2'),
        },
        '.alert-success-one .alert-message': {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.snug'),
        },
        '.alert-success-one .alert-close': {
          position: 'absolute',
          top: theme('spacing.2'),
          right: theme('spacing.2'),
          backgroundColor: theme('colors.transparent'),
          border: 'none',
          color: theme('colors.green.800'),
          cursor: 'pointer',
          transition: 'color 0.3s',
        },
        '.alert-success-one .alert-close:hover': {
          color: theme('colors.green.600'),
        },
      
        '.alert-success-two': {
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.green.500'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.alert-success-two:hover': {
          backgroundColor: theme('colors.green.600'),
        },
      
        '.alert-error-one': {
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.red.100'),
          color: theme('colors.red.800'),
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.alert-error-one:hover': {
          backgroundColor: theme('colors.red.200'),
        },
        '.alert-error-one .alert-title': {
          fontSize: theme('fontSize.lg'),
          fontWeight: theme('fontWeight.bold'),
          marginBottom: theme('spacing.2'),
        },
        '.alert-error-one .alert-message': {
          fontSize: theme('fontSize.base'),
          lineHeight: theme('lineHeight.snug'),
        },
        '.alert-error-one .alert-close': {
          position: 'absolute',
          top: theme('spacing.2'),
          right: theme('spacing.2'),
          backgroundColor: theme('colors.transparent'),
          border: 'none',
          color: theme('colors.red.800'),
          cursor: 'pointer',
          transition: 'color 0.3s',
        },
        '.alert-error-one .alert-close:hover': {
          color: theme('colors.red.600'),
        },
      
        '.alert-error-two': {
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.red.500'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.alert-error-two:hover': {
          backgroundColor: theme('colors.red.600'),
        },
      
        '.alert-error-three': {
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.red.700'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.alert-error-three:hover': {
          backgroundColor: theme('colors.red.800'),
        },
      
        '.alert-info-one': {
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.blue.100'),
          color: theme('colors.blue.800'),
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.alert-info-one:hover': {
          backgroundColor: theme('colors.blue.200'),
        },
      
        '.alert-info-two': {
          padding: theme('spacing.4'),
          borderRadius: theme('borderRadius.lg'),
          backgroundColor: theme('colors.blue.500'),
          color: theme('colors.white'),
          boxShadow: theme('boxShadow.md'),
          transition: 'background-color 0.3s, transform 0.3s',
        },
        '.alert-info-two:hover': {
          backgroundColor: theme('colors.blue.600'),
        },
      });
      addComponents({
        '.pricing-card': {
          '@apply bg-white border rounded-lg shadow-lg p-6': {},
        },
        
        '.pricing-card-header': {
          '@apply text-2xl font-bold text-center mb-4': {},
        },
        
        '.pricing-card-subtitle': {
          '@apply text-xl text-center text-gray-500 mb-6': {},
        },
        
        '.pricing-card-price': {
          '@apply flex justify-center items-baseline mb-6': {},
        },
        '.pricing-card-price span': {
          '@apply text-4xl font-semibold': {},
        },
        '.pricing-card-price .price-amount': {
          '@apply text-5xl font-bold': {},
        },
        '.pricing-card-price .price-duration': {
          '@apply text-xl text-gray-500': {},
        },
    
        '.pricing-card-features': {
          '@apply mb-6': {},
        },
        '.pricing-card-features li': {
          '@apply flex items-center mb-2': {},
        },
        '.pricing-card-features svg': {
          '@apply w-4 h-4 text-teal-500 mr-2': {},
        },
    
        '.pricing-card-button': {
          '@apply w-full py-2 bg-teal-500 text-white font-semibold rounded-lg hover:bg-teal-600 transition duration-300': {},
        },
        
        '.pricing-card-pro': {
          '@apply bg-teal-500 text-white': {},
        },
        '.pricing-card-pro .pricing-card-button': {
          '@apply bg-teal-700 hover:bg-teal-800': {},
        },
    
        '.pricing-card-enterprise': {
          '@apply bg-white border text-gray-500': {},
        },
        '.pricing-card-enterprise .pricing-card-button': {
          '@apply bg-teal-500 hover:bg-teal-600': {},
        },
      });
      addComponents({
        '.pricing-card-gradient': {
          '@apply border rounded-lg shadow-lg p-8 transition-all ease-in-out duration-300': {},
        },
    
        '.pricing-card-gradient-header': {
          '@apply text-2xl font-semibold text-center mb-4': {},
        },
    
        '.pricing-card-gradient-price': {
          '@apply text-5xl font-extrabold text-center mb-6': {},
        },
    
        '.pricing-card-gradient-features': {
          '@apply text-sm text-gray-700 mb-6': {},
        },
    
        '.pricing-card-gradient-button': {
          '@apply py-3 px-6 rounded-lg text-white font-semibold transition duration-300': {},
        },
    
        // Basic Plan Styles
        '.pricing-card-gradient-basic': {
          '@apply bg-gradient-to-r from-teal-400 to-teal-600 text-white': {},
        },
        '.pricing-card-gradient-basic .pricing-card-gradient-button': {
          '@apply bg-teal-700 hover:bg-teal-800': {},
        },
    
        // Premium Plan Styles
        '.pricing-card-gradient-premium': {
          '@apply bg-gradient-to-r from-purple-400 to-purple-600 text-white': {},
        },
        '.pricing-card-gradient-premium .pricing-card-gradient-button': {
          '@apply bg-purple-700 hover:bg-purple-800': {},
        },
      });
      
      
})

module.exports = emuikitPlugin;